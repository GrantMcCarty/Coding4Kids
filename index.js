var path = require('path');
const port = process.env.PORT || 3030;

const express = require('express');
const app = express();

const fs = require('fs');

const bodyParser = require("body-parser");

const STATS_FILE = 'userInfo.json';

'use strict';
var crypto = require('crypto');


var currentUser;

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

//Set the base path to the angular folder
app.use(express.static(path.join(__dirname, 'dist/Coding4Kids')));

console.log(__dirname);

//source: https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Any routes will be redirected to the angular app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/Coding4Kids/index.html'));
});

//Starting server on port 3030
app.listen(port, () => {
    console.log('Server started on ' + port);
});

app.post('/api/sendToken', function (req, res) {
    res.json({ 'token': req.body.token + "-002" });
});

app.post('/api/login', function (req, res) {
    let valid = checkUserFile("userFile.txt", req.body.user, req.body.password);
    let nextLesson = undefined;
    if(valid) {
        let statsObj = getOrCreateStatsFile(req.body.user);
        if(statsObj) {
            nextLesson = statsObj.lessonsCompleted+1;
        }
    }
    res.json({ 'valid': valid, 'nextLesson': nextLesson });
});

app.post('/api/logout', function (req, res) {
    currentUser = null;
});

app.get('/api/get-user', function (req, res) {
    res.send(currentUser)
});

app.post('/api/create-user', function (req, res) {
    var pw = saltHashPassword(req.body.password)
    let valid = writeTextFile("userFile.txt", req.body.user, pw);
    if(valid) {
        getOrCreateStatsFile(req.body.user);
    }
    res.json({ 'valid': valid });
});

app.post('/api/get-user-stats', function (req, res) {
    let statsObj = undefined;
    if (findUser("userFile.txt", req.body.user)) {
        statsObj = getOrCreateStatsFile(req.body.user)
    }
    else {
        console.log("user doesn't exist!");
    }
    res.json({ 'stats': statsObj });
});

app.post('/api/update-user-stats', function (req, res) {
    let valid = false;
    console.log(req.body);
    if (findUser("userFile.txt", req.body.stats.name)) {
        valid = updateOrCreateStatsfile(req.body.stats);
    }
    else {
        console.log("user doesn't exist!");
    }
    res.json({ 'valid': valid });
});

function updateOrCreateStatsfile(req) {
    let statsFile = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    if (statsFile) { //make sure file has data
        let statsObjects = statsFile.objects ? statsFile.objects : statsFile;
        for (let x = 0; x < statsObjects.length; x++) { //may eventually sort by name/id to speed up process
            let obj = statsObjects[x];
            if (obj && req.name == obj.name) { //find the stats object by username but could be id
                let lessonNum = req.lesson - 1;
                if(req.completed && obj.lessonsCompleted <= lessonNum) {
                    obj.lessonsCompleted++;
                }
                obj.timeSpent[lessonNum] += req.timeSpent;
                if (req.quizScore) {
                    obj.quizScores[lessonNum].push(req.quizScore*100);
                }

                //For now, favorite activity is the activity in the lesson with the most time spent.
                let highest = obj.timeSpent[0]
                let highestIdx = 0;
                for (var y = 1; y < obj.timeSpent.length; y++) {
                    if (obj.timeSpent[y] > highest) {
                        highestIdx = y;
                        highest = obj.timeSpent[y];
                    }
                }
                obj.favoriteActivity = highestIdx;
                statsObjects[x] = obj;
                fs.writeFileSync(STATS_FILE, JSON.stringify(statsObjects));
                return true;
            }
        }
    } else {
        statsFile = [];
    }

    //user was not found so create one, eventually pass the req obj instead of creating a new one for update
    createUserStats(statsFile, req.name);
    return true;
}

function getOrCreateStatsFile(user) {
    let statsFile = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    if (statsFile) { //make sure file has data
        let statsObjects = statsFile.objects ? statsFile.objects : statsFile;
        for (let x = 0; x < statsObjects.length; x++) { //may eventually sort by name/id to speed up process
            let obj = statsObjects[x];
            if (obj && user == obj.name) { //find the stats object by username
                return obj;
            }
        }
    } else {
        statsFile = [];
    }

    //user was not found so create one
    return createUserStats(statsFile, user);
}

function createUserStats(statsFile, user) {
    console.log("Creating new user stats for: " + user);
    let length = statsFile.objects ? statsFile.objects : statsFile.length;
    let statObj = {
        "id": length + 1,
        "name": user,
        "lessonsCompleted": 0,
        "quizScores": [[], [], [], [], [], []], //6 lessons for now
        "timeSpent": [0,0,0,0,0,0], //6 lessons for now
        "favoriteActivity": "none"
    }

    statsFile.objects ? statsFile.objects.push(statObj) : statsFile.push(statObj);
    fs.writeFileSync(STATS_FILE, JSON.stringify(statsFile));
    return statObj;
}

function checkUserFile(file, user, password) {
    let foundUser = false;
    let str = fs.readFileSync(file, 'utf8');
    var line = str.split('\n');
    for (let x = 0; x < line.length; x++) {
        var string = line[x].split("- ");
        for (let y = 0; y < string.length; y++) {
            if (foundUser) {
                var salt = string[y].slice(0, 15);
                var pwValue = sha512(password, salt);
                if (string[y] == pwValue.salt + pwValue.passwordHash) {
                    currentUser = user;
                    return true;
                }
            }
            foundUser = (string[y] == user);
        }
    }
    return false;
}

function findUser(file, user) {
    let str = fs.readFileSync(file, 'utf8');
    var line = str.split('\n');
    for (let x = 0; x < line.length; x++) {
        let str = line[x].slice(0, user.length) + "- ";
        if (str == user + "- ") {
            return true;
        }
    }
    return false;
}

function writeTextFile(file, username, password) {
    if (!findUser(file, username)) {
        fs.appendFileSync(file, username + "- " + password + '\n', "utf8");
        currentUser = username;
        return true;
    }
    console.log("user exists!");
    return false;
}

var genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(15);
    var passwordData = sha512(userpassword, salt);
    return passwordData.salt + passwordData.passwordHash;
}

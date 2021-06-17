var path = require('path');
const port = process.env.PORT || 3030;

const express = require('express');
const app = express();

const fs = require('fs');

const bodyParser = require("body-parser");

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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/sendToken', function(req, res) {
    res.json({'token': req.body.token + "-002"});
});

app.post('/api/login', function(req, res) {
    console.log(JSON.stringify(req.body))
    addPlayer(req.body.user)  
    res.json({'valid': checkUserFile("userFile.txt", req.body.user, req.body.password)});
});

app.post('/api/logout', function(req, res) {
    console.log(JSON.stringify(req.body))
    currentUser = null;
    if(players[0] === req.body.user || players[1] === req.body.user)
        resetGame();
    removePlayer(req.body.user);
});

app.get('/api/get-user', function(req, res) {
    res.send(currentUser)
});

app.post('/api/createUser', function(req, res) {
    console.log(JSON.stringify(req.body))
    var pw = saltHashPassword(req.body.password)
    res.json({'valid': writeTextFile("userFile.txt", req.body.user, pw)});
});

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/Coding4Kids/index.html'));
});


//Starting server on port 3030
app.listen(port, () => {
    console.log('Server started!');
    console.log(port);
});

function checkUserFile(file, user, password)
{
    let foundUser = false;
    let str = fs.readFileSync(file,'utf8');
    var line = str.split('\n');
    for(let x = 0; x < line.length; x++) {
        var string = line[x].split("- ");
        for(let y = 0; y < string.length; y++) {
        if(foundUser) {
            var salt = string[y].slice(0,15);
            var pwValue = sha512(password, salt);
            console.log(pwValue)
            if(string[y] == pwValue.salt + pwValue.passwordHash) {
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
    let str = fs.readFileSync(file,'utf8');
    var line = str.split('\n');
    for(let x = 0; x < line.length; x++) {
        if(line[x].includes(user+"- ")) {
            return true;
        }
    }
    return false;
}

function writeTextFile(file, username, password)
{
  if(!findUser(file, username)) {
    fs.appendFileSync(file, username+"- "+password+'\n', "utf8");
    currentUser = username;
    return true;
  }
  return false;
}

var genRandomString = function(length) {
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0, length);
}

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(15);
    var passwordData = sha512(userpassword, salt);
    return passwordData.salt + passwordData.passwordHash;
}

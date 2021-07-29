import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  constructor(private userService: UserService) { }

  userStats;
  favoriteActivity;

  ngOnInit(): void {
    this.userService.userCall(sessionStorage.getItem('currentUser')).subscribe(data => {
      this.userStats = data.stats;
    });
  }

  getTimeSpent() {
    let arr = [];
    let largest = 0;
    let index = 0, favLesson = 0;
    this.userStats?.timeSpent.forEach(element => {
      let num = Number(element);
      if(num > largest) {
        largest = num;
        favLesson = index;
      }
      let minutes = Math.floor(num / 60);
      let seconds = num % 60
      let str = minutes != 0 
      ? minutes + " minutes, " + seconds + " seconds" 
      : seconds + " seconds"
      arr.push(str);
      index++;
    });
    this.getFavoriteActivity(favLesson+1);
    return arr;
  }

  getQuizScores(idx) {
    let scores = this.userStats?.quizScores[idx];
    return scores && scores.length > 0 ? scores : ["N/A"];
  }

  scoresAsText(scores) {
    let string = "";
    for(let x = 0; x < scores?.length; x++) {
      string += scores[x];
      if(x+1 != scores.length)
        string += ", "
    }
    return string == "" ? "No Attempts":string;
  }

  getFavoriteActivity(favLesson) {
    switch(favLesson) {
      case 1 : this.favoriteActivity = "What is coding?"; break;
      case 2 : this.favoriteActivity = "What are variables?"; break;
      case 3 : this.favoriteActivity = "Hello World!"; break;
      case 4 : this.favoriteActivity = "If/Else Statements"; break;
      case 5 : this.favoriteActivity = "TODO ADD LESSON NAME"; break;
    }
  }

  showFavoriteActivity() {
    return this.favoriteActivity ? this.favoriteActivity : "";
  }

}

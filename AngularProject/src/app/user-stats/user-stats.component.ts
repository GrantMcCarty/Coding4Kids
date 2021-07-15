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

  ngOnInit(): void {
    this.userService.userCall(sessionStorage.getItem('currentUser')).subscribe(data => {
      this.userStats = data.stats;
      console.log(this.userStats);  
    });
  }

  getTimeSpent() {
    return this.userStats?.timeSpent || [];
  }

  getQuizScores() {
    return this.userStats?.quizScores || [];
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

}

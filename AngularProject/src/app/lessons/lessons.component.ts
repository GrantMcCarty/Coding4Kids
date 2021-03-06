import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScriptService } from "../script.service";
import { UserService } from '../user.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit, OnDestroy {

  constructor(private httpClient: HttpClient, private script: ScriptService, private userService: UserService) { }

  lesson;
  currentLesson;
  currentPage;
  quiz;
  break;
  currentBreak;
  choices;
  currentChoice;
  correctAnswers;
  totalQuestions;
  answered;
  endQuiz;
  showInput;
  input;
  time: number = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.loadScript();
    this.userService.userCall(sessionStorage.getItem('currentUser')).subscribe(data => {
      this.currentLesson = data.stats.lessonsCompleted + 1;
    });
    this.currentPage = this.currentBreak = this.correctAnswers = this.time = 0;
    this.quiz = this.break = this.answered = this.endQuiz = false;
  }

  ngOnDestroy() {
    this.updateStats();
  }

  getLessonInfo(data) {
    if (!data) {
      alert("Error getting lesson " + this.currentLesson);
      return;
    }
    this.lesson = data;
    this.totalQuestions = this.lesson?.quiz?.length || 0;
  }

  loadScript() {
    this.script.load('filepicker').then(data => {
      console.log('script loaded');
    }).catch(error => console.log(error));
  }

  getLessonText() {
    if (this.lesson) {
      let text = this.lesson.lessonText[this.currentPage];
      if (text != "break" && text != "quiz") {
        this.quiz = this.break = false;
        return this.lesson.lessonText[this.currentPage];
      }
      else if (text == "break") {
        this.break = true;
        this.choices = this.lesson.choices[this.currentBreak];
        return this.lesson.break[this.currentBreak];
      }
      else if (text == "quiz") {
        this.quiz = true;
        this.choices = this.lesson.quizChoices[this.currentBreak];
        return this.lesson.quiz[this.currentBreak];
      }
    }
    else return "";
  }

  hasNext() {
    return this.lesson && this.lesson.lessonText.length > this.currentPage + 1;
  }

  hasPrevious() {
    return this.lesson && this.currentPage != 0
  }

  flipPage(number) {
    let pageNum = this.currentPage + number
    if (pageNum < 0) return;
    let pageSize = this.lesson.lessonText.length;
    if (pageNum >= pageSize) return;
    this.currentPage += number;
    this.getLessonText();
    let showCode = this.lesson?.showCode || -1
    if (this.currentPage == showCode) {
      document.getElementById("codeSection").children[this.currentLesson - 1].removeAttribute("hidden")
    } else if (showCode != -1) {
      document.getElementById("codeSection").children[this.currentLesson - 1].setAttribute("hidden", "");
    } else if (this.lesson.inputPages) {
      this.showInput = this.lesson.inputPages.includes(this.currentPage);
    }
  }

  setChoice(event) {
    this.currentChoice = event.target.defaultValue;
  }

  checkAnswer() {
    if (this.currentChoice == undefined) return;
    let correct = this.currentChoice[0] == this.lesson.answers[this.currentBreak];
    if (correct) this.correctAnswers++;
    let message = correct ? "Correct! :)" : "Incorrect! :("
    alert(message);
    this.answered = true;
    this.currentChoice = undefined;
  }

  nextQuestion() {
    this.answered = false;
    this.currentBreak++;
    if (this.currentBreak >= this.totalQuestions) {
      this.quiz = false;
      this.endQuiz = true;
    }
  }

  nextLesson() {
    this.updateStats();
    window.location.reload();
  }

  updateStats() {
    if(this.currentLesson == 7)
      return;
    let score = this.correctAnswers / this.totalQuestions
    this.userService.updateStats({
      name: sessionStorage.getItem('currentUser'),
      lesson: this.currentLesson,
      timeSpent: this.time,
      quizScore: score,
      completed: score >= 0.8
    });
    this.pauseTimer();
  }

  repeatQuiz() {
    this.updateStats();
    this.endQuiz = false;
    this.quiz = true;
    this.correctAnswers = 0;
    this.currentBreak -= this.totalQuestions;
  }

  setInput($event) {
    this.input = $event.target.value;
  }

  checkInput() {
    let correct: string[] = this.lesson.correctInput;
    let found = false;
    correct.forEach(str => {
      if (str == this.input) {
        this.showInput = false;
        found = true;
        return;
      }
    })
    found ? alert("Correct! :D") : alert("Incorrect! :(");
  }

  completedLesson() {
    return (this.correctAnswers / this.totalQuestions) >= 0.8
  }

  getLessonHeader() {
    return this.lesson ? this.lesson.header :  "";
  }
  getLessonHeaderText() {
    return this.lesson ? this.lesson.headerText :  "";
  }
  getLesson(lessonNum) {
    this.httpClient.get('assets/lessons/lesson' + lessonNum + '.json', { responseType: 'json' })
        .subscribe(data => this.getLessonInfo(data));
    this.currentLesson = lessonNum;
    this.startTimer();
  }
}

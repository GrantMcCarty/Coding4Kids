import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  lesson;
  lessonHeader;
  headerText;
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

  ngOnInit(): void {
    this.currentLesson = 1; //TODO implement what next lesson or current lesson is
    this.currentPage = this.currentBreak = this.correctAnswers = 0;
    this.quiz = this.break = this.answered = this.endQuiz = false;
    this.httpClient.get('assets/lessons/lesson'+this.currentLesson+'.json', { responseType: 'json' })
      .subscribe(data => {
        this.lesson = data
        this.lessonHeader = this.lesson.header;
        this.headerText = this.lesson.headerText;
        this.totalQuestions = this.lesson.quiz.length;
      });
  }

  getLessonText() {
    if(this.lesson) {
      let text = this.lesson.lessonText[this.currentPage];
      if(text != "break" && text != "quiz") {
        this.quiz = this.break = false;
        return this.lesson.lessonText[this.currentPage];
      }
      else if(text=="break"){
        this.break = true;
        this.choices = this.lesson.choices[this.currentBreak];
        return this.lesson.break[this.currentBreak];
      }
      else if(text=="quiz"){
        this.quiz = true;
        this.choices = this.lesson.quizChoices[this.currentBreak];
        return this.lesson.quiz[this.currentBreak];
      }
    }
  }

  hasNext() {
    return this.lesson && this.lesson.lessonText.length > this.currentPage+1;
  }
  
  hasPrevious() {
    return this.lesson && this.currentPage != 0
  }

  flipPage(number) {
    let pageNum = this.currentPage+number 
    if(pageNum < 0) return;
    let pageSize = this.lesson.lessonText.length;
    if(pageNum >= pageSize) return;
    this.currentPage += number;
    this.getLessonText();
  }

  setChoice(event) {
    this.currentChoice = event.target.defaultValue; 
  }

  checkAnswer() {
    if(this.currentChoice == undefined) return;
    console.log(this.currentChoice);
    let correct = this.currentChoice[0] == this.lesson.answers[this.currentBreak]; 
    if(correct) this.correctAnswers++;
    let message = correct ? "Correct! :)" : "Incorrect! :("
    alert(message);
    this.answered = true;
    this.currentChoice = undefined;
  }

  nextQuestion() {
    this.answered = false;
      this.currentBreak++;
      if(this.currentBreak >= this.totalQuestions) this.endQuiz = true; 
  }
  
  nextLesson() {
    //TODO implement lesson tracking feature
  }

  repeatQuiz() {
    this.endQuiz=false;
    this.correctAnswers = 0;
    this.currentBreak -= this.totalQuestions;
  }
}

import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LessonsComponent } from './lessons.component';

describe('LessonsComponent', () => {
  let component: LessonsComponent;
  let fixture: ComponentFixture<LessonsComponent>;

  let fakeHttpClient = {
    post() {
      return new Observable<any>();
    }
  };
  let fakeRouter = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsComponent ],
      providers: [{provide:HttpClient, useValue: fakeHttpClient},
        {provide:Router, useValue:fakeRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not complete lesson if score is not 80% or above', () => {
    component.totalQuestions = 5;
    component.correctAnswers = 3;
    expect(component.completedLesson()).toBe(false)
  })

  it('should complete lesson if score is 80% or above', () => {
    component.totalQuestions = 5;
    component.correctAnswers = 4;
    expect(component.completedLesson()).toBe(true)
  })
});

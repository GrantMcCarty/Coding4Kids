import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserStatsComponent } from '../app/user-stats/user-stats.component';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;
  let fakeHttpClient = {
    post() {
      return new Observable<any>();
    }
  };
  let fakeRouter = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatsComponent ],
      providers: [{provide:HttpClient, useValue: fakeHttpClient},
        {provide:Router, useValue:fakeRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return timeSpent', () => {
    component.userStats = { timeSpent:[10] }
    expect(component.getTimeSpent()).toEqual([10]);
  })

  it('should return quizScores', () => {
    component.userStats = { quizScores:[100] }
    expect(component.getQuizScores(1)).toEqual([100]);
  })

  it('should return quizScores as text', () => {
    expect(component.scoresAsText([100, 50, 60])).toEqual("100, 50, 60");
  })
});

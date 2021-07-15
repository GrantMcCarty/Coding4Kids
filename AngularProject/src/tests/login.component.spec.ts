import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fakeHttpClient = {};
  let fakeRouter = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{provide:HttpClient, useValue: fakeHttpClient},
                  {provide:Router, useValue:fakeRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set username', () => {
    component.setUsername({target:{value:'user'}});
    expect(component.username).toEqual('user');
  });

  it('should set password', () => {
    component.setPassword({target:{value:'pw'}});
    expect(component.password).toEqual('pw');
  });

  it('should not login if no user is present', () => {
    component.checkSession();
    expect(component.loggedIn).toBe(undefined);
  })
});

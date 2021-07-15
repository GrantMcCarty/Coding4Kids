import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  let fakeHttpClient = {};
  let fakeRouter = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide:HttpClient, useValue: fakeHttpClient},
        {provide:Router, useValue:fakeRouter}]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

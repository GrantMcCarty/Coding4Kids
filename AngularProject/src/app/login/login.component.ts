import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  hide: boolean;
  username: string;
  password: string;
  loggedIn: boolean;

  ngOnInit(): void {
    this.hide = true;
    this.checkSession(); 
  }

  checkSession() {
    let user = sessionStorage.getItem('currentUser');
    if(user) {
      this.username = user;
      this.loggedIn = true;
    }
  }

  checkUser() {
    if(this.username == null) this.username = "Guest";
    this.userService.loginCall(this.username, this.password).subscribe(data => {
      this.loggedIn = data.valid;
      if(data.valid) 
        this.storeUser(this.username);
      else
        alert("Login failed, check username and password")
    });
  }

  private storeUser(user: string) {
    console.log("Storing current user: " + user);
    sessionStorage.setItem('currentUser', user);
    this.router.navigate(['/dashboard']);
  }

  clear() {
    this.username = null;
    this.password = null;
  }

  createUser() {
    //cant create username as Guest/Admin or a duplicate username
    this.userService.createCall(this.username, this.password).subscribe(data => {
      this.loggedIn = data.valid;
      if(data.valid) this.storeUser(this.username)
      else alert("User already exists!\n Try logging in or creating an account with a different name.")
      return data.valid;
    });
  }

  setUsername($event) {
    this.username = $event.target.value;
  }
  setPassword($event) {
    this.password = $event.target.value;
  }

}

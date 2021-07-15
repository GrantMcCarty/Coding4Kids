import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
    'Content-Type': 'application/json'
})

@Injectable({
    providedIn: 'root'
})
export class UserService implements CanActivate {

    constructor(private http: HttpClient, public route: Router) { }

    username: string;
    loggedIn: boolean = false;

    // url = "http://localhost:3030/api/";
    url = "https://coding-4-kids-qariq.ondigitalocean.app/api/";

    canActivate(): boolean {
        if (sessionStorage.getItem('currentUser')) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    }

    login(userName: string, password: string): boolean {
        this.loginCall(userName, password).subscribe(data => {
            this.username = userName;
            this.loggedIn = data.valid;
        })
        return this.loggedIn;
    }

    loginCall(userName: string, password: string): Observable<any> {
        this.http.post(this.url + "sendToken", { 'token': "token4CSCI3550" }, { headers, responseType: 'json' }).subscribe(data => {
            if (data != "token4CSCI3550" + "-002") return null;
        })
        var data = { 'user': userName, 'password': password }
        return this.http.post(this.url + "login", data, { headers, responseType: 'json' });
    }

    createCall(userName: string, password: string): Observable<any> {
        this.http.post(this.url + "sendToken", { 'token': "token4CSCI3550" }, { headers, responseType: 'json' }).subscribe(data => {
            if (data != "token4CSCI3550" + "-002") return null;
        })
        var data = { 'user': userName, 'password': password }
        return this.http.post(this.url + "create-user", data, { headers, responseType: 'json' });
    }

    getUser(): Observable<any> {
        return this.http.get(this.url + "get-user");
    }

    getUserInfo(): string {
        this.getUser().subscribe(user => {
            this.username = user;
        })
        return this.username;
    }

    getUserStats(user) {
        this.userCall(user).subscribe(data => {
            console.log(data);
            return data;
        })
    }

    userCall(user): Observable<any> {
        var data = { 'user': user }
        return this.http.post(this.url + "get-user-stats", data, { headers, responseType: 'json' });
    }

    updateStats(stats) {
        this.updateCall(stats).subscribe(data => console.log(data));
    }

    private updateCall(stats): Observable<any> {
        var data = { 'stats': stats }
        return this.http.post(this.url + "update-user-stats", data, { headers, responseType: 'json' });
    }

}

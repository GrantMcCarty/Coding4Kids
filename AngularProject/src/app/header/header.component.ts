import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  username: string;

  ngOnInit(): void {
    let item = sessionStorage.getItem('currentUser')
    if(item)
      this.username = item;
    else 
      this.username = "Guest";
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private router: Router ) {

  }
  getRoute(){
    if (this.router.url === '/'){
     return "home-page";
    } else {
      return "sticky";
    }
  }
  ngOnInit(){
    console.log(this.router.url)
  }
}

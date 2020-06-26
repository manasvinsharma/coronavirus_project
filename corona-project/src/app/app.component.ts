import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-project';
  // logoutButton ;
  // loginButton ;
   constructor(private router:Router){}

   ngOnInit(): void {
      // if(localStorage.getItem("name") && localStorage.getItem("email"))
      // {
      //   this.logoutButton = true;
      //   this.loginButton = false;
      // }
      // else
      // {
      //   this.logoutButton = false;
      //   this.loginButton = true;
      // }
  }

  logout(){
    localStorage.removeItem("email");
  
    localStorage.removeItem("name");

    // this.logoutButton = false;
    // this.logoutButton = true;
    // this.logoutButton = true;
    this.router.navigate(['/login']);

  }
}

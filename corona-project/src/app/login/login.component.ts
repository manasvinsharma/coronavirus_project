import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()  childEvent = new EventEmitter();

  emailProp;
  passwordProp;
  loginCLicked:boolean;
  
  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {

    if(localStorage.getItem('email')){
      alert("You are already logged in");
      this.router.navigate(['/']);
    }  
  }

  login()
   {
    this.ds.signin({
      email:this.emailProp,
      password:this.passwordProp,
      })
      .subscribe((response)=>{
        if(response.status=="ok")
        {
           localStorage.setItem('name', response.data[0].name);
           localStorage.setItem('email', response.data[0].email);
          //  this.childEvent.emit(false);
           this.router.navigate(['/testYourself']);

        }
        else{
          alert("Incorrect E-mail or Password");
          // if(!localStorage.getItem("name") && !localStorage.getItem("email"))
          // this.childEvent.emit(true);
        }
      })   
 
  }
}

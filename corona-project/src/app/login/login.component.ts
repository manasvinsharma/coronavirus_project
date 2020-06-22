import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailProp;
  passwordProp;
  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {

    if(localStorage.getItem('email')){
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

           this.router.navigate(['/coronaTracker']);

        }
        else{
          alert("Incorrect E-mail or Password");
        }
      })   
 
  }
}

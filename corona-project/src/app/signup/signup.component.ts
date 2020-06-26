import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


nameProp;
emailProp;
mobileProp;
passwordProp;

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  signUp()
  {
     this.ds.signup({
       name:this.nameProp, 
       email:this.emailProp,
       mobile:this.mobileProp,
       password:this.passwordProp,
      })
       .subscribe((response)=>{
         if(response.status=="ok")
         {
           alert('You have successfully registered to our corona page. Now you will be redirected to login');
           this.router.navigate(['/login']);
         }
         else{
           alert("E-mail already Registered");
          //  alert(JSON.stringify(response.data));
         }
       })
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailProp;
  passwordProp;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
        // alert(this.emailProp);
        // alert(this.passwordProp);
        if(this.emailProp=="gchirag631@gmail.com" && this.passwordProp=="chirag")
        {
              localStorage.setItem("email", this.emailProp);
              this.router.navigate(['/coronaTracker'], {queryParams:{name:"Chirag"}})
        }
        else{
          alert("Credentials not correct")
        }
  }

}

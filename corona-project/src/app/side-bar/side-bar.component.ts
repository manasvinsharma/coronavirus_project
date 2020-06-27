import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


declare var document:any;  
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(private router:Router) {  }

  ngOnInit(): void {
    this.router.navigate(['/sidebar/worldStats']);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main1").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main1").style.marginLeft = "0";
  }
  
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-corona-tracker',
  templateUrl: './corona-tracker.component.html',
  styleUrls: ['./corona-tracker.component.css']
})
export class CoronaTrackerComponent implements OnInit {

  name;
  email;

  constructor(private route: ActivatedRoute, private router:Router) { }
  

  ngOnInit(): void {
this.email=localStorage.getItem('email');
this.route.queryParamMap.subscribe((d)=>{
this.name=d.get('name');
})



}



  }



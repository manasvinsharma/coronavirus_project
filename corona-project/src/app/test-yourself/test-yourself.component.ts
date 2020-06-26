import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-test-yourself',
  templateUrl: './test-yourself.component.html',
  styleUrls: ['./test-yourself.component.css']
})
export class TestYourselfComponent implements OnInit {
  symptom;
  desease;
  symptomnoa;
  deseasenoa;
  traveledchk;
  applychk;
  applychk2;
  constructor(private router:Router) { }

  ngOnInit() : void{

  } 

  test()
  {
    alert("Hope you have filled details correctly..!");
    alert("Now navigating to corona tracker........if u re positive then only your location will be saved in our db otherwise it will be temporarily saved");  
    this.router.navigate(['/coronaTracker']);
  }
}
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-yourself',
  templateUrl: './test-yourself.component.html',
  styleUrls: ['./test-yourself.component.css']
})
export class TestYourselfComponent implements OnInit {
  symptom;
  desease;
  traveledchk;
  applychk;
  applychk2;
  symptomnoa;
  deseasenoa;
  

  constructor() { }

  ngOnInit() : void{

  } 

  test()
  {
   
    alert("Hope you have filled details correctly..!")
    
  }

}

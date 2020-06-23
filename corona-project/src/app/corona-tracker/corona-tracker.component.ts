import { DataService } from './../data.service';
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
  // long;
  // lati;
  constructor(private route: ActivatedRoute, private router:Router, private ds:DataService) { }
  

  ngOnInit(): void {
this.email=localStorage.getItem('email');
this.route.queryParamMap.subscribe((d)=>{
this.name=d.get('name');
})



}

        getLocation(){
            if(navigator.geolocation){
                // console.log("success");
                navigator.geolocation.getCurrentPosition(this.showposition);
            }
            else{
                console.log("error");
            }
        }

         showposition(position){
             var lati = position.coords.latitude;
             var long = position.coords.longitude;
            console.log(lati,long);


            this.ds.storeLocation({
              email:this.email, 
              longitude:long, 
              lattitude:lati, 
       
             })
              .subscribe((response)=>{
                if(response.status=="ok")
                {
                  alert('Your location successfuly stored');
                }
                else{
                  alert("E-mail already Registered");
                }
              })
        }

  }



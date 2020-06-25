import { async } from '@angular/core/testing';
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
  lati;
  long;
  obj;
  userlist;
  latitude = 28.644800;
  longitude = 77.216721;
  zoomCtrl = true;

  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService) { }


  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.route.queryParamMap.subscribe((d) => {
      this.name = d.get('name');
    })

    //making temporary data
    this.userlist = [
                      {email:"karnataka",longitude:76.680000	,lattitude:12.120000},
                      {email:"rajasthan",longitude:74.629997,lattitude:24.879999},
                      {email:"maharashtra",longitude:73.300003,lattitude:16.994444},
                      {email:"maharashtra",longitude:72.849998,lattitude:19.155001},
                    ]
    // var i=0;                
    // for (i = 0; i < this.userlist.length; i++) 
    // {
    //   var dist = this.distanceCheck(24.879999,74.629997,this.userlist[i].lattitude,this.userlist[i].longitude,"K");
    //   if(dist<2)
    //   {
    //     alert("you have a positive corona patient in your 2 km of radius");
    //     break;
    //   }
    // }
    // if(i==this.userlist.length)
    // {
    //   alert("you are safe as you dont have a positive corona patient nearby you");
    // }                    
  }





  getLocation() {
    if (navigator.geolocation) {
      console.log("success");
      this.obj = navigator.geolocation.getCurrentPosition(this.showposition);

      setTimeout((obj2)=>{ alert("Hello");
                            console.log(obj2);
                            this.saveLocation(obj2); 
                          }, 2000,this.obj);                    
      
      // setTimeout(this.myFunction, 2000,this.obj,this.saveLocation);  //from stackoverflow                  
    }
    else {
          console.log("error");
        }
  }

  // myFunction(obj2,saveLocation){
  //    alert("Hello");
  //   console.log(obj2);
  //   saveLocation(obj2);                       
  // }

  showposition(position) {
    var lati = position.coords.latitude;
    var long = position.coords.longitude;
    console.log("inside showposition");
    console.log(lati, long);
    return {lattitude:lati,longitude:long};
  }

  saveLocation(obj1)
  {
    console.log("inside saveLocation");
    console.log(obj1);
    this.ds.storeLocation(obj1)
      .subscribe((response) => {
        if (response.status == "ok") {
          alert('Your location successfuly stored');
        }
        else {
          alert("error in saving location");
        }
      })
  }

  distanceCheck(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist;
    }
  }
}
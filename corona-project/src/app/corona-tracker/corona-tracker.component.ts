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
  current_lati;
  current_long;
  obj;
  userlist;
  latitude = 28.644800;
  longitude = 77.216721;


  zoomCtrl = true;
  locationObject;

  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService) { }


  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.route.queryParamMap.subscribe((d) => {
      this.name = d.get('name');
    })   
  }





  getLocation() {
    if (navigator.geolocation) {
      console.log("success");
       navigator.geolocation.getCurrentPosition((p)=>{this.showposition(p)});    
    }
    else {
          console.log("error");
        }
  }

  showposition(position) {
    this.current_lati = position.coords.latitude;
    this.current_long = position.coords.longitude;
    console.log("inside showposition");
    console.log(this.current_lati, this.current_long);
    this.saveLocation( {lattitude:this.current_lati,longitude:this.current_long,email:this.email});
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
        else if(response.status == "location already exists")
        {
          alert('your location is already stored ,thank you')
        }
        else {
          alert("error in saving location");
        }
      })
      
  }
  checking(){
    this.getAllLocations();
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


  getAllLocations()
  {
    this.ds.getLocations()
      .subscribe((response)=>{
        if(response.status=="ok")
        {
          alert('locations fetched successfully');
          // console.log(response.data);
          this.userlist = response.data;
          this.checkingNearby();
        }
        else{
          alert("locations cant be fetched ");
         //  alert(JSON.stringify(response.data));
        }
      })
  }


  checkingNearby(){
    var i=0;                
    for (i = 0; i < this.userlist.length; i++) 
    {
      var dist = this.distanceCheck(this.current_lati,this.current_long,this.userlist[i].lattitude,this.userlist[i].longitude,"K");
      if(dist<2 && this.current_lati != this.userlist[i].lattitude && this.current_long != this.userlist[i].longitude)
      {
        var alertDiv = document.getElementsByClassName("alerts")[0];
        alertDiv.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Alert</strong> Beware you have a corona positive in 2 km of your radius !
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        break;
      }
    }
    if(i==this.userlist.length)
    {
      var alertDiv = document.getElementsByClassName("alerts")[0];
        alertDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Relax</strong> You dont have a corona positive patient nearby .
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }  
  }
}
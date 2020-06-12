import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var document: any;
declare var $: any;
declare var ready: any;

@Component({
  selector: 'app-continent-stats',
  templateUrl: './continent-stats.component.html',
  styleUrls: ['./continent-stats.component.css']
})
export class ContinentStatsComponent implements OnInit {
  data;

  constructor(private d: DataService) { }

  ngOnInit(): void {
    this.fetching();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  fetching() {
    var confirmed = document.getElementsByClassName("confirmed");

    var death = document.getElementsByClassName("Death");

    var continent_name = document.getElementsByClassName("continent-name");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    this.d.getDataFromApi3().subscribe((d) => {
      this.data = d;
      console.log(this.data);
      for (let i = 0; i < 6; i++) {
        continent_name[i].innerText = this.data[i]["continent"].split("/").join(" /");  //ye split join sirf australia/oceania ka naam ke liye krna pada
        death[i].innerText = this.data[i]["deaths"];
        confirmed[i].innerText = this.data[i]["cases"];
      }
    })
  }
}


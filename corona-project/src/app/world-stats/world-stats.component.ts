import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


declare var document:any;
declare var Chart:any;

@Component({
  selector: 'app-world-stats',
  templateUrl: './world-stats.component.html',
  styleUrls: ['./world-stats.component.css']
})
export class WorldStatsComponent implements OnInit {
  data1;
  data2;
  obj1;
  obj2;
  constructor(private d: DataService) { }

  ngOnInit(): void {
    this.getData();
    this.getTimelineData();            
  }

  

  getData() {
    var confirmed = document.getElementById("confirmed");
    var deaths = document.getElementById("deaths");
    var recovered = document.getElementById("recovered");
    var world = document.getElementById("world-percent");
    var critical = document.getElementById("critical");
    var mild = document.getElementById("mild");
    var rate = document.getElementById("death-rate");

    var world_population = 7594300000;  //to be updated everytime

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    this.d.getDataFromApi1().subscribe((d) => {
      this.data1 = d;
      console.log(this.data1);
      confirmed.innerText = this.data1["data"]["total_cases"];
      deaths.innerText = this.data1["data"]["death_cases"];
      recovered.innerText = this.data1["data"]["recovery_cases"];
      // console.log(typeof((this.data1["data"]["total_cases"])));  //this is imp console log ....uncomment it
      let limit_data = ((this.data1["data"]["total_cases"]).split(",").join("") / world_population).toFixed(7);
      world.innerText = limit_data;
      critical.innerText = this.data1["data"]["critical_condition_active_cases"];
      mild.innerText = this.data1["data"]["mild_condition_active_cases"];
      rate.innerText = this.data1["data"]["general_death_rate"];
      this.showGraph(this.data1);
    })
    
  }


  showGraph(obj1) {
    let myChart = document.getElementById('barChart').getContext('2d');

    var v1 = (obj1["data"]["total_cases"].split(",").join(""));
    var v2 = (obj1["data"]["death_cases"].split(",").join(""));
    var v3 = (obj1["data"]["recovery_cases"].split(",").join(""));
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';


    let massPopChart = new Chart(myChart, {
      type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ['Confirmed', 'Deaths', 'Recovered'],
        datasets: [{
          label: 'Worldwide Status',
          data: [
            v1,
            v2,
            v3
          ],
          //backgroundColor:'green',
          backgroundColor: [
            'black',
            'red',
            'green'
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000'
        }]
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Worldwide Status',
          fontSize: 25
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            fontColor: '#000'
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

  getTimelineData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    this.d.getDataFromApi2().subscribe((d) => {
      this.data2 = d;
      // console.log(this.data2["cases"]);
      // console.log(this.data2["deaths"]);
      // console.log(this.data2["recovered"]);
      this.showTimeline(this.data2);
    });
  }

showTimeline(obj2) {
      var timeline = document.getElementById('timeline').getContext('2d');
      // console.log(obj2);

      var arr1 = [];
      var arr2 = [];
      for(let key in obj2["cases"]) {
      arr1.push(key);
      arr2.push(obj2["cases"][key]);
    }

    var arr3 = [];
    for (let key in obj2["deaths"]) {
      arr3.push(obj2["deaths"][key]);
    }

    var arr4 = [];
    for (let key in obj2["recovered"]) {
      arr4.push(obj2["recovered"][key]);
    }


    var dataFirst = {
      label: "Confirmed",
      data: arr2,
      lineTension: 0,
      fill: false,
      borderColor: 'black'
    };

    var dataSecond = {
      label: "Deaths",
      data: arr3,
      lineTension: 0,
      fill: false,
      borderColor: 'red'
    };

    var dataThird = {
      label: "Recovered",
      data: arr4,
      lineTension: 0,
      fill: false,
      borderColor: 'green'
    };

    var myLineChart = new Chart(timeline, {
      type: 'line',
      data: {
        labels: arr1,
        datasets: [dataFirst, dataSecond, dataThird],
      }
    });
  }

}
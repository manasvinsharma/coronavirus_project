import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


declare var innerText: any;
declare var value: any;
declare var ZC: any;
declare var LICENSE: any;
declare var zingchart: any;
declare var zooming: any;


@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  array;
  url;
  data;
  constructor(private d: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData() {

  var badges = document.getElementsByClassName("badge");

  var my_data = new Object();

  this.d.getDataFromApi5().subscribe((d) => {
    this.data = d;
    console.log(this.data);
    //console.log("inside second then");
    console.log(this.data);

    this.array = this.data.statewise;

    for (let i = 1; i < this.array.length; i++) {
      var tooltip = { text: `${this.array[i].state} ` + ` ${this.array[i].confirmed}` };
      var lable = {
        visible: true
      }
      my_data[this.array[i].statecode] = { tooltip: tooltip, lable: lable, backgroundColor: "#ff5722" };
    }

    badges[0].innerHTML = `${this.array[0].confirmed}`;
    badges[1].innerHTML = `${this.array[0].deaths}`;
    badges[2].innerHTML = `${this.array[0].recovered}`;
    badges[3].innerHTML = `${this.array[0].active}`;
    console.log("line 50");
    // console.log(my_data.MH);
    this.showMap(my_data);

  })

}



searchAlgo(state_searched) {
  var details = document.getElementsByClassName("details")[0];

  var search_box = document.getElementsByClassName("form-control")[0];
  var state_searched = state_searched.toLowerCase();
  console.log(state_searched);
  console.log(this.array);
  var state_details;
  for (let i = 1; i < this.array.length; i++) {
    if (this.array[i]["state"].toLowerCase() == state_searched)
      state_details = this.array[i];
    else if (this.array[i]["state"].toLowerCase().includes(state_searched))
      state_details = this.array[i];
  }
  console.log(state_details);

  let html = `<p class="h1 state-name" style="margin-left: 30%; font-weight: 800;">${state_details.state}</p>
                  <ul class="list-group my-4">
                      <li class="list-group-item d-flex justify-content-between align-items-center Total-Confirmed">
                          Total Confirmed
                        <span class="badge badge-danger badge-pill">${state_details.confirmed}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center Total-Deaths">
                        Total Deaths
                        <span class="badge badge-secondary badge-pill">${state_details.deaths}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center Total-Recovered">
                        Total recovered
                        <span class="badge badge-success badge-pill">${state_details.recovered}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center Total-Active">
                        Total active
                        <span class="badge badge-success badge-pill">${state_details.active}</span>
                      </li>
                  </ul>
                  <p class="card-text mx-4 my-4"><small class="text-muted">Last updated on ${state_details.lastupdatedtime}</small></p>`;
  details.innerHTML = html;
}


showMap(my_data) {
  console.log(my_data);
  ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
  let chartConfig = {
    shapes: [{
      type: 'zingchart.maps',
      options: {
        bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
        ignore: ['IND'], // ignore India because we are rendering a more specific India map below
        name: 'world.countries',
        panning: false, // turn of zooming. Doesn't work with bounding box
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '1px',
            fontSize: '18px'
          },
          controls: {
            visible: false // turn of zooming. Doesn't work with bounding box
          },
          hoverState: {
            alpha: 0.60
          }
        },
        zooming: false // turn of zooming. Doesn't work with bounding box
      }
    },
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls: {
            visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: 0.50
          },
          items: my_data,
          label: { // text displaying. Like valueBox
            fontSize: '15px',
            visible: false
          }
        },
        // zooming: false // turn of zooming. Doesn't work with bounding box
      }
    }
    ]
  }

  zingchart.loadModules('maps,maps-ind,maps-world-countries');
  zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '800px',
    width: '1600px',
  });
}



}

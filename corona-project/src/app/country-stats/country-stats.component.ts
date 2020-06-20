import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// declare var value:any;

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {

    result;
  constructor(private d: DataService) { }

  ngOnInit(): void {
      this.getData();
  }

            openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            }

            closeNav() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
            }    

            getData()
            {
                this.d.getDataFromApi4().subscribe((d) => {
                    this.result = d;
                    console.log(this.result);
                    this.processData(this.result);
                    })
            }

            myFunction1(a, b) {
                let A = a.TotalConfirmed;
                let B = b.TotalConfirmed;

                if (A > B)
                    return -1;
                else if (B > A)
                    return 1;
                else
                    return 0;
            }

            myFunction2(a, b) {
                let A = a.TotalConfirmed;
                let B = b.TotalConfirmed;

                if (A > B)
                    return 1;
                else if (B > A)
                    return -1;
                else
                    return 0;
            }

            processData(data) {
                var usefulObj = data["Countries"];

                let worstHitCountries = usefulObj.sort(this.myFunction1).slice(0, 10);
                console.log(worstHitCountries);

                let leastHitCountries = usefulObj.sort(this.myFunction2).slice(0, 10);
                console.log(leastHitCountries);

                var tableBody1 = document.getElementsByClassName("table-body1")[0];

                let html1 = "";
                for (let i = 0; i < worstHitCountries.length; i++) {
                    html1 += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${worstHitCountries[i]["Country"]}</td>
                <td>${worstHitCountries[i]["TotalConfirmed"]}</td>
              </tr>
              `
                }
                tableBody1.innerHTML = html1;

                var tableBody2 = document.getElementsByClassName("table-body2")[0];

                let html2 = "";
                for (let i = 0; i < leastHitCountries.length; i++) {
                    html2 += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${leastHitCountries[i]["Country"]}</td>
                <td>${leastHitCountries[i]["TotalConfirmed"]}</td>
              </tr>
              `
                }
                tableBody2.innerHTML = html2;
            }

            searchAlgo(country_searched) {
                country_searched = country_searched.toLowerCase(); 
                var myArray = this.result["Countries"];
                var search_box = document.getElementsByClassName("form-control")[0];
                // var country_searched = search_box.value.toLowerCase();
                // console.log(country_searched);
                var country_details;
                for (let i = 0; i < myArray.length; i++) {
                    if (myArray[i]["Country"].toLowerCase() == country_searched)
                        country_details = myArray[i];
                    else if (myArray[i]["Country"].toLowerCase().includes(country_searched))
                        country_details = myArray[i];
                }
                console.log(country_details);

                var html="";
                html = `<p class="h1" style="margin-left: 30%; font-weight: 800;">${country_details.Country}</p>
                <ul class="list-group my-4">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total Confirmed
                        <span class="badge badge-danger badge-pill">${country_details.TotalConfirmed}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total Deaths
                        <span class="badge badge-secondary badge-pill">${country_details.TotalDeaths}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total Recovered
                        <span class="badge badge-success badge-pill">${country_details.TotalRecovered}</span>
                    </li>
                </ul>`
            
                var details = document.getElementsByClassName("details")[0];
                details.innerHTML = html;
            }    
            
}

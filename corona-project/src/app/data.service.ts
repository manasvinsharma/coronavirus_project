import { Injectable } from '@angular/core';               // i created this whole file using command for data services
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getDataFromApi1():any{
    return this.http.get("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats");
  }

  getDataFromApi2():any{
    return this.http.get("https://corona.lmao.ninja/v2/historical/all");
  }

  getDataFromApi3():any{
    return this.http.get("https://corona.lmao.ninja/v2/continents?yesterday&sort");
  }
  
}

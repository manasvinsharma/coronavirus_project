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

  getDataFromApi4():any{
    return this.http.get("https://api.covid19api.com/summary");
  }

 signup(d):any{
    return this.http.post('http://localhost:3000/sign-up', d);
 }

 signin(d):any{
  return this.http.post('http://localhost:3000/sign-in', d);
 }

 coronatest(d):any{
  return this.http.post('http://localhost:3000/corona-test', d);

 }
  
}

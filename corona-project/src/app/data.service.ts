import { Injectable } from '@angular/core'; // i created this whole file using command for data services
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDataFromApi1(): any {
    return this.http.get(
      'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats'
    );
  }

  getDataFromApi2(): any {
    return this.http.get('https://corona.lmao.ninja/v2/historical/all');
  }

  getDataFromApi3(): any {
    return this.http.get(
      'https://corona.lmao.ninja/v2/continents?yesterday&sort'
    );
  }

  getDataFromApi4(): any {
    return this.http.get('https://api.covid19api.com/summary');
  }

  getDataFromApi5(): any {
    return this.http.get('https://api.covid19india.org/data.json');
  }

  signup(d): any {
    return this.http.post('sign-up', d);
  }

  signin(d): any {
    return this.http.post('sign-in', d);
  }

  storeLocation(d): any {
    return this.http.post('corona-tracker', d);
  }

  getLocations(): any {
    return this.http.post('get-locations', '');
  }
}

// http://localhost:3000/

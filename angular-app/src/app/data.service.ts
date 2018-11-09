import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sys } from './system';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return alert("Hello From DataService");
  }

  getPeople(next) {
    let url = (next === undefined) ? Sys.SW_API + 'people/?format=json' : next;
    return this.http.get(url);
  }

  getPlanets() {
    let url = Sys.SW_API + 'planets/?format=json';
    return this.http.get(url);
  }

  getDWContacts() {
    let url = 'https://datawasher-api/create?limit=10&first_name=MOX_RFN&last_name=MOX_RLN&email=MOX_EMAIL&addr=MOX_RSA&code=MOX_RI_1000&state=MOX_STATE&sex=MOX_RSMF';
    return this.http.get(url);
  }

}

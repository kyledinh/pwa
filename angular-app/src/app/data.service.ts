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

  getPeople() {
    let url = Sys.SW_API + 'people/?format=json';
    return this.http.get(url);
  }

}

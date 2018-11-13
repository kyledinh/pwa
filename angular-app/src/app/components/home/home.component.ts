import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  people: Array<any> = [];
  contacts: Object;
  planets: Object;
  people_count: Number = -1;
  next: String;
  search: String;

  constructor(private data: DataService) {
    this.people = [];
    this.search = "";
  }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.data.getPlanets().subscribe(data => {
      this.planets = data;
      console.log(this.planets);
    })
  }

  getPeople() {
    this.data.getPeople(this.next).subscribe(data => {
      console.warn("data", data);
      if (data.results !== undefined) {
        this.people = this.people.concat(data.results);
        this.next = data.next;
        this.people_count = data.count;
      }
      // console.log(this.people);
    })
  }

  getContacts() {
    this.data.getDWContacts().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    })
  }


}

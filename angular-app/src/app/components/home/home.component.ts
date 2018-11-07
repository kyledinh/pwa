import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  people: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

  }

  getPeople() {
    this.data.getPeople().subscribe(data => {
      this.people = data;
      console.log(this.people);
    })
  }



}

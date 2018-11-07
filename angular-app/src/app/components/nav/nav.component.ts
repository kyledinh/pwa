import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})

export class NavComponent implements OnInit {

  appTitle: string = 'My App';
  left_icon: string = 'arrow_back_ios';

  constructor() { }
  ngOnInit() {
  }

}

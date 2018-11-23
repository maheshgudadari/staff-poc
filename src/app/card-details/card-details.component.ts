import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  url: string;
  token: string;
  constructor() { }

  ngOnInit() {
    this.url = '';
    this.token = '';
  }

  sendRequest() {
    alert(this.url + 'heat' + this.token);
  }
}

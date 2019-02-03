import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css']
})
export class MainmapComponent implements OnInit {
  lat = 23.2599;
  lng = 77.4126;
  zoom = 4.7;
  constructor() { }

  ngOnInit() {
  }

}

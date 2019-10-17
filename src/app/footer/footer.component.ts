import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ticker: any;
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on('tweet', (data) => {
      this.ticker = data;
      /* console.log(data); */
    });
  }
}

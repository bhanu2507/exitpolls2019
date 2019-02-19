import { Component, OnInit, HostBinding } from '@angular/core';
import { ReadjsonService } from '../readjson.service';
import { MatDialog } from '@angular/material';
import { ConspopComponent } from '../conspop/conspop.component';
import { GetlatlngService } from '../getlatlng.service';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.css']
})
export class MainmapComponent implements OnInit {
  lat = 23.2599;
  lng = 77.4126;
  zoom = 4.7;
  cons: any;
  dialogResult = '';
  message: string;
  constructor(public dialog: MatDialog, private readJson: ReadjsonService, private getlatlng: GetlatlngService) { }

  ngOnInit() {
    this.readJson.getJSON().then(res => {
      this.cons = res;
    });
    this.getlatlng.currentMessage.subscribe(message => this.message = message);
  }
  openDialog($event: MouseEvent) {
    const dialogRef = this.dialog.open(ConspopComponent, {
      width: '600px',
      data: $event
    });
    dialogRef.afterClosed().subscribe(result => {
      /* console.log(`Dialog closed: ${result}`); */
      this.dialogResult = result;
    });
  }
}

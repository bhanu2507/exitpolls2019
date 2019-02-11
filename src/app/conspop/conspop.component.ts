import { Component, OnInit, Inject } from '@angular/core';
import { ReadjsonService } from '../readjson.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-conspop',
  templateUrl: './conspop.component.html',
  styleUrls: ['./conspop.component.css']
})
export class ConspopComponent implements OnInit {
  cons: any;
  con: any;
  fname: any;
  lname: any;
  party: any;
  city: any;
  stat: any;

  constructor(public thisDialogRef: MatDialogRef<ConspopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private readJson: ReadjsonService) { }

  ngOnInit() {
    console.log(this.data);
    this.readJson.getJSON().then(res => {
      this.cons = res;
      this.cons.forEach(con => {
        if (con.firstname === this.data) {
          this.fname = con.firstname;
          this.lname = con.lastname;
          this.city = con.city;
          this.stat = con.state;
          this.party = con.party;
          // console.log(con);
        }
      });
    });
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
  onSelectChange(evalue) {
    this.readJson.getJSON().then(res => {
      this.cons = res;
      this.cons.forEach(con => {
        if (con.city === evalue) {
          this.fname = con.firstname;
          this.lname = con.lastname;
          this.city = con.city;
          this.stat = con.state;
          this.party = con.party;
          // console.log(con);
        }
      });
    });
  }

}

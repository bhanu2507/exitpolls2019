import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-conspop',
  templateUrl: './conspop.component.html',
  styleUrls: ['./conspop.component.css']
})
export class ConspopComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ConspopComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}

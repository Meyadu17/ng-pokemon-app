import { Component } from '@angular/core';

@Component({
  selector: 'app-card-dialog',
  templateUrl:'card-dialog.component.html'
})
export class CardDialogComponent {

  constructor(public dialog: MatDialo){

  }
}

import { Directive, ElementRef } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';



@Directive({
  selector: '[appImageModal]'
})
export class ImageModalDirective {

  constructor(private el: ElementRef, /*private dialog: MatDialog*/) { 

  }

}

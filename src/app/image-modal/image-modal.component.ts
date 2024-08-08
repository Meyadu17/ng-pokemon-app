import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl:'image-modal.html' 
})
export class ImageModalComponent {
  @Input() imageUrl: string;
  
  //TODO : a faire
}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
})
export class ImageGalleryComponent {
  @ViewChild('modalImage') modalImageElement: ElementRef<HTMLImageElement>;

  images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  onClick(imageSrc: string) {
    this.modalImageElement.nativeElement.src = imageSrc;
  }
}

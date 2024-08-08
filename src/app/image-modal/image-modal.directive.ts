import { Directive, ElementRef, HostListener } from '@angular/core';
import M from 'materialize-css';

@Directive({
  selector: '[appImageModal]'
})
export class ImageModalDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const imageSrc = this.el.nativeElement.src;
    const modalElement = document.getElementById('modal1');

    if (modalElement) {
      const modal = M.Modal.init(modalElement);
      const modalImage = document.getElementById('modal-image') as HTMLImageElement;
      if (modalImage) {
        modalImage.src = imageSrc;
      } else {
        console.error('Élément modal-image non trouvé');
      }
      modal.open();
    } else {
      console.error('Modal element not found');
    }
  }
}

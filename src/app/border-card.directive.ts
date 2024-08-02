import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
 * les crochet [] sont OBLICATOIRE pour les directives. Sans eux, on ne parle plus de directive mais de composant. 
 * ici a la place de appBorderCard on prefix avec pkm afin de signifier qur cette directive s'applique sur les cartes pokemon -> totalement optionnel !
 */
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string ="#f5f5f5";
  private defaultColor: string ="#009688";
  private defaultHeight:number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string //alias
  //@Input() pkmnBorderCard: string; //sans alias

  @HostListener('mouseenter') onMouseEnter(){
    //soit l'utilisateur choisi sa couleur, soit c'est celle par defaut
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    //nativeElement permet d'accéder à lélément native du DOM sur lequel la directive sera applé
    let myHeight = "px";     
    this.el.nativeElement.style.border = myHeight+height;
    //this.el.nativeElement.style.heigth = `${height}px`; -> ne fonctione plus !
  }

  private setBorder(color: string) {
    let myBorder = "solid 4px ";     
    this.el.nativeElement.style.border = myBorder+color;
  }

}

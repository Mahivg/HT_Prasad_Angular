import { ThrowStmt } from "@angular/compiler";
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";
// Attribute Directive
@Directive({
  selector: '[myHover]'
})
export class MyHoverDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2){
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.renderer.setStyle(elementRef.nativeElement, 'color', 'blue');
    this.renderer.setStyle(elementRef.nativeElement, 'cursor', 'pointer');

    setTimeout(() => {
      console.log(this.backgroundColor);
      this.backgroundColor = 'green';
    },3000)
  }

  @HostListener('mouseenter')
  onHoverMyElement() {
    console.log('Directive mouser enter');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onLeavingFromMyElement() {
    console.log('Directive mouser leave');
    this.backgroundColor = 'green';
  }



}

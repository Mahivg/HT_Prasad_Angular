import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myLoop]'
})

//Structural Directive
export class MyLoopDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

    //How ngFor
    // for(let i = 0;  i < 5; i++){
    //   this.viewContainerRef.createEmbeddedView(templateRef);
    // }

    // How Ng If
      this.viewContainerRef.clear();
      setTimeout(()=> {
        this.viewContainerRef.createEmbeddedView(templateRef);
      }, 3000)
   }

}

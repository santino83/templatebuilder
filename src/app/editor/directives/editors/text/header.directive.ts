import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {AbstractDirective} from './abstract.directive';

@Directive({
  selector: ` [
    h1,h2,h3,h4,h5,h6,
  `
})
export class HeaderDirective extends AbstractDirective implements OnInit {

  protected toolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'],
    ]
  };

  public constructor(cfr: ComponentFactoryResolver,
                     view: ViewContainerRef,
                     renderer: Renderer2) {
    super(cfr, view, renderer, toolbar);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}

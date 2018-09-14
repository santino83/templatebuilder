import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {AbstractDirective} from './abstract.directive';

@Directive({
  selector: 'p'
})
export class ParagraphDirective extends AbstractDirective implements OnInit {

  protected toolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
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

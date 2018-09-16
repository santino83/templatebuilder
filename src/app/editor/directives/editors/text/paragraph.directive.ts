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
    'toolbar': {
      'buttons': [
        'bold', 'italic', 'underline', 'strikethrough',
        'justifyLeft', 'justifyCenter', 'justifyRight',
        'h2', 'h3', 'h4',
      ]
    }
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
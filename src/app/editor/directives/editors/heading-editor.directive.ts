import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {AbstractEditorDirective} from './abstract-editor.directive';

@Directive({
  selector: ` [
    h1,h2,h3,h4,h5,h6,
  `
})
export class HeadingEditorDirective extends AbstractEditorDirective implements OnInit {

  protected toolbar = {
    'toolbar': {
      'buttons': [
        'bold', 'italic', 'underline',
        'justifyLeft', 'justifyCenter', 'justifyRight'
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

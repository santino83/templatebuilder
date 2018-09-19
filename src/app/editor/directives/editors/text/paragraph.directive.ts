import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {AbstractDirective} from './abstract.directive';
import {EditorService} from '../../../services/editor.service';

@Directive({
  selector: 'p'
})
export class ParagraphDirective extends AbstractDirective implements OnInit {

  protected toolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'],
    ]
  };

  public constructor(cfr: ComponentFactoryResolver,
                     view: ViewContainerRef,
                     renderer: Renderer2,
                     editor: EditorService) {
    super(cfr, view, renderer, editor, toolbar);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}

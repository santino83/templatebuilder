import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: 'a'
})
export class AnchorEditorDirective implements OnChanges {

  @Input() protected param: any;

  @HostListener('dblclick') setElm() {
    this.editor.setElementName(this.param.name);
  }

  public constructor(private elRef: ElementRef,
                     private editor: EditorService) {}


  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.param && changes.param ) {
      this.elRef.nativeElement.innerHTML = this.param.value.text;
      this.elRef.nativeElement.href = this.param.value.link;

      this.elRef.nativeElement.style =
      'color:' + this.param.value.style.color + ';' +
      'background-color:' + this.param.value.style.bgColor + ';' +
      'border-color:' + this.param.value.style.borderColor + ';' +
      'border-style:' + this.param.value.style.borderStyle + ';' +
      'border-width:' + this.param.value.style.borderWidth + 'px;';
    }
  }

}

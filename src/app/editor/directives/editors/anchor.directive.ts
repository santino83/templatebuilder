import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EditorService} from '../../services/editor.service';
import {BlockEvent, Link} from '../../template-editor.types';

@Directive({
  selector: 'a'
})
export class AnchorDirective implements OnChanges {

  private _input: BlockEvent | BlockEvent;

  private param: Link;

  @Input() set input(input: BlockEvent | BlockEvent) {
    this._input = input;
    this.param = input.param as Link;
  }

  @HostListener('dblclick') setBlock() {
    this.editor.select(this._input);
  }

  public constructor(private eRef: ElementRef,
                     private editor: EditorService) {}

  public ngOnChanges(changes: SimpleChanges): void {
      this.eRef.nativeElement.innerHTML = this.param.text;
      this.eRef.nativeElement.href = this.param.link;

      for (const prop of Object.keys(this.param.style)) {
        this.eRef.nativeElement.style[prop] = this.param.style[prop];
      }

      /* porcata da levare */
      this.eRef.nativeElement.style['borderWidth'] = this.param.style['borderWidth'] + 'px';
  }

}

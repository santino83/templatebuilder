import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {BlockEvent, Image} from '../../template-editor.types';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: 'img'
})
export class ImageDirective implements OnInit, OnChanges {

  private _input: BlockEvent | BlockEvent;

  private param: Image;

  @Input() set input(input: BlockEvent | BlockEvent) {
    this._input = input;
    this.param = input.param as Image;
  }

  @HostListener('dblclick') setElement() {
    this.editor.select(this._input);
  }

  public constructor(private eRef: ElementRef,
                     private editor: EditorService,
                     private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.renderer.addClass(this.eRef.nativeElement, 'te-et');
    this.renderer.addClass(this.eRef.nativeElement, 'label');
  }

  public ngOnChanges(changes: SimpleChanges): void {

      this.eRef.nativeElement.src = this.param.src;
      this.eRef.nativeElement.alt = this.param.alt;
      this.eRef.nativeElement.align = this.param.align;
      this.eRef.nativeElement.style.width = this.param.style['width'] + 'px';
      this.eRef.nativeElement.style.height = this.param.style['height'] + 'px';
  }

}

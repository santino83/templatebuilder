import {Directive, DoCheck, ElementRef, Input} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';

@Directive({
  selector: 'section'
})
export class BlockBackgroundDirective implements DoCheck {

  @Input() instance: TemplateBlock;
  private bgColor: string;

  constructor(private elRef: ElementRef) {}

  ngDoCheck() {
    if (this.instance.getParam('bgColor') !== this.bgColor) {
      this.bgColor = this.instance.getParam('bgColor');
      this.elRef.nativeElement.style.backgroundColor = this.instance.getParam('bgColor');
      }
    }

}

import {Directive, DoCheck, ElementRef, Input} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';

@Directive({
  selector: 'section'
})
export class BlockBackgroundDirective implements DoCheck {

  @Input() instance: TemplateBlock;
  private bgColor: string;
  private bgImage: string;

  constructor(private elRef: ElementRef) {}

  ngDoCheck() {
    if (this.instance.getParam('bgColor') !== this.bgColor) {
      this.bgColor = this.instance.getParam('bgColor');
      this.elRef.nativeElement.style.backgroundColor = this.bgColor;
      }
    if (this.instance.getParam('bgImage') !== this.bgImage) {
      this.bgImage = this.instance.getParam('bgImage');
      this.elRef.nativeElement.style.backgroundImage = this.bgImage;
    }
  }


}

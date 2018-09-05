import {Directive, DoCheck, ElementRef} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';

@Directive({
  selector: 'section'
})
export class BlockBackgroundDirective implements DoCheck {

  private instance: TemplateBlock;

  constructor(private elRef: ElementRef) {
  }

  public ngDoCheck() {

    if (!this.instance) {
      return;
    }

    this.elRef.nativeElement.style.backgroundColor = this.instance.getParamValue('backgroundColor', 'value');

    this.elRef.nativeElement.style.backgroundImage = 'url(' + this.instance.getParamValue('backgroundImage', 'value') + ')';
  }

  public setInstance(instance: TemplateBlock): void {
    this.instance = instance;
    this.ngDoCheck();

  }


}

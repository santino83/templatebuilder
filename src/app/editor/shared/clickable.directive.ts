import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[clickable]'
})
export class ClickableDirective {

  public constructor(private eRef: ElementRef) {
    this.eRef.nativeElement.style.cursor = 'pointer';
  }
}

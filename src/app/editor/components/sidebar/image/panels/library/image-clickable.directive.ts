import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[imgClickable]'
})
export class ImageClickableDirective {

  @Output() clicked: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  public constructor(private eRef: ElementRef) {
    this.eRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(this.eRef);
  }
}

import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[templateBlockBackgroundDirective]'
})
export class BlockBackgroundDirective implements OnInit, OnChanges {

  @Input() public bgColor: String | null;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elRef.nativeElement.style.backgroundColor = this.bgColor || null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.bgColor) {
      this.elRef.nativeElement.style.backgroundColor = this.bgColor;
    }

  }



}

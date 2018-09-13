import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'template-library-panel',
  template: `
            <span
              *ngFor="let src of images">
              <img
                imgClickable
                (clicked)="onSelection($event,src)"
                width="100"
                height="100"
                [src]="src">
            </span>
  `
})
export class LibraryPanel implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  private images: string[] = [];

  private current: ElementRef;

  public onSelection(element: ElementRef, src: string): void {

    if (!this.current) {
      this.current = element;
      this.setBorder('3px solid #0080ff');

    } else if (this.current && this.current !== element) {
      this.setBorder('');
      this.current = element;
      this.setBorder('3px solid #0080ff');

    } else if ( this.current === element) {
      this.setBorder('');
      this.current = undefined;
    }

    this.selected.emit(src);
  }

  private setBorder(value: string): void {
    this.current.nativeElement.style.border = value;
  }

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.images.push('https://picsum.photos/200/30' + i);
    }
  }
}

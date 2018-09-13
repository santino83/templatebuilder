import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'template-library-panel',
  template: `
            <span
              *ngFor="let src of images">
              <img
                imgClickable
                (clicked)="onSelection($event,src)"
                style="cursor:pointer"
                width="100"
                height="100"
                [src]="src">
            </span>
  `
})
export class LibraryPanel implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  private images: string[] = [];

  private element: ElementRef;

  public onSelection(element: ElementRef, src: string): void {
    if (this.element === element) {
      this.element.nativeElement.style.border = '';
      this.element = undefined;
      this.selected.emit('');
      return;
    } else if (this.element) {
        this.element.nativeElement.style.border = '';
    } else {
      this.element = element;
      this.element.nativeElement.style.border = '3px solid #0080ff';
    }
    this.selected.emit(src);
  }

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.images.push('https://picsum.photos/200/30' + i);
    }
  }
}

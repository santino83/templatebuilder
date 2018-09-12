import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'template-library-panel',
  template: `
            <span
              *ngFor="let src of images">
              <img
                style="cursor:pointer"
                width="100"
                height="100"
                (click)="onSelection($event,src)"
                [src]="src">
            </span>
  `
})
export class LibraryPanel implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  private images: string[] = [];

  public onSelection(event: any, src: string): void {
    event.target.style.border = '3px solid #0080ff';
    this.selected.emit(src);
  }

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.images.push('https://picsum.photos/200/30' + i.toString());
    }
  }
}

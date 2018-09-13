import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'template-url-panel',
  template: `
      <br>
      <div class="ui-g-12 ui-md-4">
        <div class="ui-inputgroup">
          <input type="text" 
                 pInputText 
                 placeholder="URL"
                 
                 [(ngModel)]="src">
          <button 
            pButton 
            type="button" 
            icon="pi pi-check" 
            class="ui-button-warn" 
            (click)="confirm()"></button>
        </div>
      </div>
  `
})
export class UrlPanel {

  private src: string;

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  private confirm(): void {

    this.selected.emit(this.src);
  }
}

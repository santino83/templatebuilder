import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  @Input() private src: string;

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  public constructor(private http: HttpClient) {}

  private confirm(): void {
    let base64: string;
    this.http.get(this.src, { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        base64 = reader.result;
        console.log(base64);
      };
    });
    this.selected.emit(this.src);
  }
}

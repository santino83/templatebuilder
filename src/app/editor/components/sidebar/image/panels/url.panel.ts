import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../../environments/environment.prod';

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
        <p *ngIf="error !== undefined && !error; else success" style="color:green">Image successfully selected</p>
        <p *ngIf="error !== undefined &&  error; else success" style="color:red">Unable to read image. Please check your link.</p>
      </div>
  `
})
export class UrlPanel {

  private src: string;

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  private error: boolean;

  public constructor(private http: HttpClient) {}

  private confirm() {
    let base64: string;
    this.http.get(this.src, { responseType: 'blob', observe: 'response' }).subscribe((response) => {
      const reader = new FileReader();
      reader.readAsDataURL(response.body);
      reader.onloadend = function() {
        base64 = reader.result;
      };
    }, (response) => {
      if (response.status === 404) {
        this.error = true;
      }
    });
    setTimeout(() => {
      if (this.error) {
        this.selected.emit(environment.defaultImage);
      } else {
        this.selected.emit(this.src);
        this.error = false;
      }
    }, 300);
  }
}

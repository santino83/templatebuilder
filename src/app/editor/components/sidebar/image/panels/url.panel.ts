import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
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
        <div *ngIf="error !== undefined">
          <p *ngIf="error; else success" style="color:red">Unable to read image. Please check your link.</p>
          <ng-template #success><p style="color:green">Image successfully selected</p></ng-template>
        </div>
      </div>
  `
})
export class UrlPanel {

  @Input() private src = '';

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  private error: boolean;

  public constructor(private http: HttpClient) {}

  private confirm() {
    this.http
      .get(this.src, { observe: 'response' })
      .subscribe(() => {},
      (response) => {
      if (response.status === 404 || this.src === '') {
        this.error = true;
      }
    });

    setTimeout(() => {
      if (!this.error) {
        this.selected.emit(this.src);
        this.error = false;
      }
    }, 1000);

    setTimeout(() => {
      this.error = undefined;
    }, 2000);
  }
}

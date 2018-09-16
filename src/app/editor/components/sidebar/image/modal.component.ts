import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'template-modal-image-sidebar',
  template: `
    <p-dialog modal="true"
              width="700"
              [(visible)]="active">
      <p-header>
        Add or edit media
      </p-header>
      <p-tabView>
        <div style="height:400px">
          
          <p-tabPanel header="Upload">
            <template-upload-panel></template-upload-panel>
          </p-tabPanel>
          
          <p-tabPanel selected="true" header="Library">
            <template-library-panel
              [src]="src"
              (selected)="select($event)">
            </template-library-panel>
          </p-tabPanel>
          
          <p-tabPanel header="Insert by URL">
            <template-url-panel
              [src]="src"
              (selected)="select($event)">
            </template-url-panel>
          </p-tabPanel>
          
        </div>        
      </p-tabView>
      <p-footer>
        <button 
          type="button" 
          pButton 
          icon="pi pi-info-circle"
          label="Imposta"
          (click)="onSelection()"></button>
      </p-footer>
    </p-dialog>
  `
})
export class ModalComponent {

  private active = false;

  private src: string;

  @Output() imageSelected: EventEmitter<string> = new EventEmitter<string>();

  private onSelection(): void {
    this.imageSelected.emit(this.src);
    this.close();
  }

  public open(src): void {
    this.active = true;
    this.select(src);
  }

  public close(): void {
    this.active = false;
  }

  private select(src: string): void {
    this.src = src;
  }
}

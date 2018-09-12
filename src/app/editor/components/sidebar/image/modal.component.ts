import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'template-modal-image-sidebar',
  template: `
    <p-dialog modal="true"
              width="700"
              [(visible)]="popup">
      <p-header>
        Aggiungi o modifica media
      </p-header>
      <p-tabView>
        <div style="height:400px">
          
          <p-tabPanel header="Carica file">
            <template-upload-panel></template-upload-panel>
          </p-tabPanel>
          
          <p-tabPanel header="Libreria media">
            <template-library-panel
              (selected)="select($event)">
            </template-library-panel>
          </p-tabPanel>
          
          <p-tabPanel header="Inserisci da URL">
            <template-url-panel
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

  private popup = false;

  private src: string;

  @Output() imageSelected: EventEmitter<string> = new EventEmitter<string>();

  private select(src: string): void {
    this.src = src;
  }

  private unselect(): void {
    this.src = '';
  }

  private onSelection(): void {
    this.imageSelected.emit(this.src);
    this.close();
  }

  public open(src): void {
    this.popup = true;
    this.select(src);
  }

  public close(): void {
    this.popup = false;
    this.unselect();
  }
}

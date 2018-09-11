import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'template-modal-image-sidebar',
  template: `
    <p-dialog modal="true"
              [minWidth]="700"
              [(visible)]="popup">
      <p-header>
        Aggiungi o modifica media
      </p-header>
      <p-tabView>
        <div style="height:400px">
          <p-tabPanel header="Carica file">
            Content 1
          </p-tabPanel>
          <p-tabPanel header="Libreria media">
            <div class="container">
              <table class="table">
                <tbody>
                  <tr>
                    <td>frenk</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Inserisci da URL">
            <br>
            <span class="ui-float-label">
                <input pInputText
                       type="text"
                       size="72"
                       [(ngModel)]="src"/>
                <label for="float-input">URL immagine</label>
            </span>
          </p-tabPanel>
        </div>
      </p-tabView>
      <p-footer>
        <button type="button" (click)="onSelection()" pButton icon="pi pi-info-circle" label="Imposta"></button>
      </p-footer>
    </p-dialog>
  `
})
export class ModalComponent {

  private popup = false;

  private src: string;

  @Output() imageSelected: EventEmitter<string> = new EventEmitter<string>();

  private onSelection(): void {
    this.imageSelected.emit(this.src);
    this.close();
  }

  public open(src): void {
    this.popup = true;
    this.src = src;
  }

  public close(): void {
    this.popup = false;
    this.src = '';
  }
}

import {Component, Input, ViewChild} from '@angular/core';
import {ModalComponent} from './modal.component';
import {Image} from '../../../template-editor.types';

@Component({
  selector: 'template-image-sidebar',
  styleUrls: ['../right-sidebar.css'],
  template: `
    <button type="button" (click)="onSelection()" pButton icon="fa fa-edit" label="Change image"></button>
    
    <div class="container cont-style">
      <h3 class="text-center">Immagine</h3>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-font"></i></span>
          <input type="text" pInputText placeholder="Alt" [(ngModel)]="param.alt">
        </div>
      </div>

    <div class="row justify-content-md-center">
      <div class="ui-inputgroup">
        <span class="ui-inputgroup-addon"><i class="fa fa-arrows-h"></i></span>
        <input type="text" pInputText placeholder="Width" [(ngModel)]="param.style.width">
      </div>
    </div>

    <div class="row justify-content-md-center">
      <div class="ui-inputgroup">
        <span class="ui-inputgroup-addon"><i class="fa fa-arrows-v"></i></span>
        <input type="text" pInputText placeholder="Height" [(ngModel)]="param.style.height">
      </div>
    </div>
    
    <div class="row justify-content-md-center">
      <div class="ui-inputgroup">
        <span class="ui-inputgroup-addon"><i class="fa fa-crop"></i></span>
        <p-dropdown [options]="align" [(ngModel)]="param.align"></p-dropdown>
      </div>
    </div>

    <template-modal-image-sidebar #modal (imageSelected)="setImage($event)"></template-modal-image-sidebar>
  `
})
export class ImageSidebar {

  @Input() param: Image;

  @ViewChild('modal') modal: ModalComponent;

  private align = [
    {label: 'Left', value: 'left'},
    {label: 'Center', value: 'center'},
    {label: 'Right', value: 'right'}];

  private onSelection() {
    this.modal.open(this.param.src);
  }

  private setImage(src: string) {
    this.param.src = src;
  }

}

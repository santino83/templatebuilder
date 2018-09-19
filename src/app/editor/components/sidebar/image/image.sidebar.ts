import {Component, Input, ViewChild} from '@angular/core';
import {ModalComponent} from './modal.component';
import {Image} from '../../../template-editor.types';

@Component({
  selector: 'template-image-sidebar',
  template: `
    <button type="button" (click)="onSelection()" pButton icon="pi pi-info-circle" label="Change image"></button>
    <br>
    alt
    <input type="text" class="form-control" [(ngModel)]="param.alt">
    <br>
    align
    <select [(ngModel)]="param.align">
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>
    <br>
    width
    <input type="text" class="form-control" [(ngModel)]="param.style.width">    
    <br>
    height
    <input type="text" class="form-control" [(ngModel)]="param.style.height">
    <template-modal-image-sidebar #modal (imageSelected)="setImage($event)"></template-modal-image-sidebar>
  `
})
export class ImageSidebar {

  @Input() param: Image;

  @ViewChild('modal') modal: ModalComponent;

  private onSelection() {
    this.modal.open(this.param.src);
  }

  private setImage(src: string) {
    this.param.src = src;
  }

}

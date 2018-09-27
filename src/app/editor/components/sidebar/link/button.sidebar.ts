import {Component, DoCheck, Input, ViewEncapsulation} from '@angular/core';
import {Button} from '../../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-button-sidebar',
  styleUrls: ['../right-sidebar.css'],
  template: `
    <div class="container" class="cont-style">
      <h3 class="text-center">Cambia Bottone</h3>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-font"></i></span>
          <input type="text" pInputText placeholder="Username" [(ngModel)]="param.text">
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-chain"></i></span>
          <input type="text" pInputText placeholder="Username" [(ngModel)]="param.link">
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-font"></i></span>
          <input type="text"
                 pInputText
                 [(ngModel)]="param.style.color"
                 [value]="param.style.color"
                 [(colorPicker)]="param.style.color"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.color">
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-square"></i></span>
          <input type="text"
                 pInputText
                 [(ngModel)]="param.style.backgroundColor"
                 [value]="param.style.backgroundColor"
                 [(colorPicker)]="param.style.backgroundColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.backgroundColor"/>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-square-o"></i></span>
          <input type="text"
                 pInputText
                 [(ngModel)]="param.style.borderColor"
                 [value]="param.style.borderColor"
                 [(colorPicker)]="param.style.borderColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.borderColor"/>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-arrows"></i></span>
          <input type="number" pInputText [(ngModel)]="param.style.borderWidth">
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="fa fa-crop"></i></span>
          <p-dropdown [options]="border" [(ngModel)]="param.style.borderStyle"></p-dropdown>
        </div>
      </div>

    </div>
  `
})
export class ButtonSidebar {
  @Input() param: Button;

  border = [
    {label: 'Dotted', value: 'dotted'},
    {label: 'Dashed', value: 'dashed'},
    {label: 'Solid', value: 'solid'},
    {label: 'Inset', value: 'inset'},
    {label: 'Outset', value: 'outset'},
    {label: 'None', value: 'none'}];
}






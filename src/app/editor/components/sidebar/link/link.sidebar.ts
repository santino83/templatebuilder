import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Link} from '../../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-link-sidebar',
  styleUrls: ['../right-sidebar.css'],
  template: `
    <div class="container cont-style">
      <h3 class="text-center">Cambia Link</h3>

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
      
    </div>
  `
})
export class LinkSidebar {
  @Input() param: Link;
}






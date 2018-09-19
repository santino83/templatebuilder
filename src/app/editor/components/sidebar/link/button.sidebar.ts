import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Button} from '../../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-button-sidebar',
  styleUrls: ['button-link.css'],
  template: `
    <div class="container" class="cont-style">
      <h3 class="text-center">Cambia Bottone</h3>
      <div class="row">
        
        <div class="col-sm">
          <p class="text">Testo:</p>
          <p class="text">Link:</p>
          <p class="text">ColoreTesto:</p>
          <p class="text">BgColor:</p>
          <p class="text">BorderColor:</p>
          <p class="text">BorderWidth:</p>
          <p class="text">BorderType:</p>
        </div>
        
        <div class="col-sm">
          <input type="text" class="input" [(ngModel)]="param.text"><br>
          
          <input type="text" class="input" [(ngModel)]="param.link"><br>
          
          <input class="input"
                 [(ngModel)]="param.style.color"
                 [value]="param.style.color"
                 [(colorPicker)]="param.style.color"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.color"><br>
          
          <input class="input"
                 [(ngModel)]="param.style.backgroundColor"
                 [value]="param.style.backgroundColor"
                 [(colorPicker)]="param.style.backgroundColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="backgroundColor"/><br>
          
          <input class="input"
                 [(ngModel)]="param.style.borderColor"
                 [value]="param.style.borderColor"
                 [(colorPicker)]="param.style.borderColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.borderColor"/><br>
          
          <input class="input" type="number" [(ngModel)]="param.style.borderWidth"><br>
          
          <select class="input" [(ngModel)]="param.style.borderStyle">
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="solid">Solid</option>
            <option value="inset">Inset</option>
            <option value="outset">Outset</option>
            <option value="none">None</option>
          </select>
          
        </div>
      </div>
    </div>
  `
})
export class ButtonSidebar {
  @Input() param: Button;
}






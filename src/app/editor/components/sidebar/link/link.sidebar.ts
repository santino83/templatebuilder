import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Link} from '../../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-link-sidebar',
  styleUrls: ['button-link.css'],
  template: `
    <div class="container cont-style">
      <h3 class="text-center">Cambia Link</h3>
      <div class="row">
        
        <div class="col-sm">
          <p class="text">Testo:</p>
          <p class="text">Link:</p>
          <p class="text">ColoreTesto:</p>
          <p class="text">BgColor:</p>
        </div>
        
        <div class="col-sm">
          <input type="text" class="input" [(ngModel)]="param.text"><br>
          
          <input type="text" class="input" [(ngModel)]="param.link"><br>
          
          <input class="input" 
                 [value]="param.style.color"
                 [(colorPicker)]="param.style.color"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.color"><br>
          
          <input class="input" 
                 [value]="param.style.backgroundColor"
                 [(colorPicker)]="param.style.backgroundColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="param.style.backgroundColor"/><br>
        </div>
      </div>
    </div>
  `
})
export class LinkSidebar {
  @Input() param: Link;
}






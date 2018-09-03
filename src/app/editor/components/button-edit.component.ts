import {Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {TemplateBlock} from '../blocks/template.block';
import {Parameter} from '../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-button-edit',
  styles: [`
    .cont-style {
      margin: 0px 10px 10px 10px;
    }
    .input {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .text {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 26px;
      text-align: center;
    }
    
  `],
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
          <input type="text" class="input" [(ngModel)]="text"><br>
          
          <input type="text" class="input" [(ngModel)]="link"><br>
          
          <input class="input" 
                 [value]="textColor"
                 [(colorPicker)]="textColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="textColor"><br>
          
          <input class="input" 
                 [value]="bgColor"
                 [(colorPicker)]="bgColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="bgColor"/><br>
          
          <input class="input" 
                 [value]="borderColor"
                 [(colorPicker)]="borderColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="borderColor"/><br>
          
          <input class="input" type="number" [(ngModel)]="borderWidth"><br>
          
          <select class="input" [(ngModel)]="borderStyle">
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="solid">Solid</option>
            <option value="inset">Inset</option>
            <option value="outset">Outset</option>
            <option value="none">None</option>
          </select>
          
        </div>
      </div>
  `
})
export class ButtonEditComponent implements OnInit, DoCheck {

  private block: TemplateBlock;
  private name: string;

  private text: string | '';
  private link: string | '';
  private textColor: string | '';
  private bgColor: string | '';
  private borderColor: string | '';
  private borderStyle: string | '';
  private borderWidth: string | '';

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
      .elementName$
      .subscribe(name => {
        this.name = name;

        this.editor
          .blockStream$
          .subscribe(block => {
            this.block = block;
            this.text = block.getParamValue(name, 'value');
            this.link = block.getParamValue(name, 'link');
            this.textColor = block.getParamValue(name, 'style').color;
            this.bgColor = block.getParamValue(name, 'style').bgColor;
            this.borderColor = block.getParamValue(name, 'style').bgColor;
            this.borderStyle = block.getParamValue(name, 'style').borderStyle;
            this.borderWidth = block.getParamValue(name, 'style').borderWidth;
          });
      });
  }

  public ngDoCheck() {

    if (!this.block) { return; }

    this.block.setParam(this.name, 'value', this.text);
    this.block.setParam(this.name, 'link', this.link);
    this.block.setParam(this.name, 'style', {
      color: this.textColor,
      bgColor: this.bgColor,
      borderColor: this.borderColor,
      borderStyle: this.borderStyle,
      borderWidth: this.borderWidth
    });
  }


}






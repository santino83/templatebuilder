import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {EditorService} from '../../../services/editor.service';
import {TemplateBlock} from '../../../blocks/template.block';
import {Button, Parameter} from '../../../template-editor.types';
import {SidebarService} from '../../../services/sidebar.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-button-sidebar',
  styleUrls: ['button-link.css'],
  template: `
    <!-- RIVISTA PERCHE AL 90% UGUALE A LINK, DA METTERE IN SHARED -->
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
                 [value]="backgroundColor"
                 [(colorPicker)]="backgroundColor"
                 [cpWidth]="'auto'"
                 [cpPosition]="'bottom'"
                 [style.background]="backgroundColor"/><br>
          
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
    </div>
  `
})
export class ButtonSidebar implements OnInit, DoCheck, OnChanges {

  @Input() name: string;

  private block: TemplateBlock;
  private button: Parameter;

  private text: string | '';
  private link: string | '';
  private textColor: string | '';
  private backgroundColor: string | '';
  private borderColor: string | '';
  private borderStyle: string | '';
  private borderWidth: string | '';

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
      .blockStream$
      .subscribe(obj => {
        this.block = obj.block;
        this.button = this.block.getParam(this.name);
        this.initValues();
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.block && changes.name) {
      this.initValues();
    }
  }

  public ngDoCheck() {
    if (!this.block || !(this.button instanceof Button)) return;
    console.log(this.button);

    this.block.setParam(this.name, 'text', this.text);
    this.block.setParam(this.name, 'link', this.link);
    this.block.setParam(this.name, 'style', {
      color: this.textColor,
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderStyle: this.borderStyle,
      borderWidth: this.borderWidth
    });
  }

  public initValues() {
    if ( !this.button || !(this.button instanceof Button)) return;

    this.text = this.button['text'];
    this.link = this.button['link'];
    this.textColor = this.button['style']['color'];
    this.backgroundColor = this.button['style']['backgroundColor'];
    this.borderColor = this.button['style']['borderColor'];
    this.borderStyle = this.button['style']['borderStyle'];
    this.borderWidth = this.button['style']['borderWidth'];
  }



}





import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {EditorService} from '../../../services/editor.service';
import {TemplateBlock} from '../../../blocks/template.block';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-link-sidebar',
  styleUrls: ['button-link.css'],
  template: `
    <!-- RIVISTA PERCHE INCLUSA DENTRO BUTTON -->
    
    <div class="container" class="cont-style">
      <h3 class="text-center">Cambia Link</h3>
      <div class="row">
        
        <div class="col-sm">
          <p class="text">Testo:</p>
          <p class="text">Link:</p>
          <p class="text">ColoreTesto:</p>
          <p class="text">BgColor:</p>
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
          
        </div>
      </div>
    </div>
  `
})
export class LinkSidebar implements OnInit, DoCheck, OnChanges {

  private block: TemplateBlock;
  @Input() name: string;

  private text: string | '';
  private link: string | '';
  private textColor: string | '';
  private backgroundColor: string | '';

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
      .blockStream$
      .subscribe(obj => {
        this.block = obj.block;
        this.initValues();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.block && changes.name) {
      this.initValues();
    }
  }

  public ngDoCheck() {
    if (this.block) {

      this.block.setParam(this.name, 'text', this.text);
      this.block.setParam(this.name, 'link', this.link);
      this.block.setParam(this.name, 'style', {
        color: this.textColor,
        backgroundColor: this.backgroundColor,
      });
    }
  }

  public initValues() {
    this.text = this.block.getParamValue(this.name, 'text');
    this.link = this.block.getParamValue(this.name, 'link');
    this.textColor = this.block.getParamValue(this.name, 'style').color || '';
    this.backgroundColor = this.block.getParamValue(this.name, 'style').backgroundColor || '';
  }



}






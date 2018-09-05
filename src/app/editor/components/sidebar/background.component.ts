import {Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../../blocks/template.block';
import {EditorService} from '../../services/editor.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-background-sidebar',
  styles: [`
    .cont-style {
      margin: 0px 10px 10px 10px;
    }
  `],
  template: `
    <div class="container">
      <div class="row" class="cont-style">
        <div class="text-center">
          <h3> LAYOUT OPTIONS </h3>
          <span [(colorPicker)]="color"
                [style.background]="color"
                [cpOutputFormat]="'rgba'"
                [cpToggle]="true"
                [cpDialogDisplay]="'inline'"></span><br>
          <div>
              <input type="text" [(ngModel)]="imageUrl"> <br>
              <button class="btn" (click)="setImage()">Set Image</button>
          </div>
        </div>

      </div>
    </div>
  `
})
export class BackgroundComponent implements OnInit, DoCheck {

  private block: TemplateBlock;
  private color: string;
  private imageUrl: string;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
      this.editor.blockStream$.subscribe(
       obj => {
         this.block = obj.block;
         this.color = this.block.getParamValue('backgroundColor', 'value');
       });
  }

  public ngDoCheck() {
    if (this.block) {
      this.block.setParam('backgroundColor', 'value', this.color);
    }
  }

  public setImage() {
    this.block.setParam('backgroundImage', 'value', this.imageUrl);
  }



}






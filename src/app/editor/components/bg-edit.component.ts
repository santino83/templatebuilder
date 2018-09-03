import {Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';
import {EditorService} from '../services/editor.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-bg-edit',
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
export class BgEditComponent implements OnInit, DoCheck {

  private blockToEdit: TemplateBlock;
  private color: string;
  private imageUrl: string;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
      this.editor.blockStream$.subscribe(
       block => {
         this.blockToEdit = block;
         this.color = block.getParamValue('bgColor', 'value');
       });
  }

  public ngDoCheck() {
    if (this.blockToEdit) {
      this.blockToEdit.setParam('bgColor', 'value', this.color);
    }
  }

  public setImage() {
    this.blockToEdit.setParam('bgImage', 'value', this.imageUrl);
  }



}






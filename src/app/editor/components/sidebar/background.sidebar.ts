import {Component, DoCheck, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../../blocks/template.block';
import {Background, BlockEvent} from '../../template-editor.types';

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
      <div class="row justify-content-center">
        <div class="text-center">
          <h3> LAYOUT OPTIONS </h3>
          <span [(colorPicker)]="bgColor.value"
                [style.background]="bgColor.value"
                [cpOutputFormat]="'rgba'"
                [cpToggle]="true"
                [cpDialogDisplay]="'inline'"></span><br>
        
          <input type="text" [(ngModel)]="bgImage.value">
        </div>
      </div>
    </div>
  `
})
export class BackgroundSidebar {

  @Input() set event(block: TemplateBlock) {
    this.block = block;
    this.bgColor = this.block.getParam('backgroundColor') as Background;
    this.bgImage = this.block.getParam('backgroundImage') as Background;
  }

  private block: TemplateBlock;

  private bgColor: Background;

  private bgImage: Background;

}






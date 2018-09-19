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
      <div class="row cont-style">
        <div class="text-center">
          <h3> LAYOUT OPTIONS </h3>
          <span [(colorPicker)]="color"
                [style.background]="color"
                [cpOutputFormat]="'rgba'"
                [cpToggle]="true"
                [cpDialogDisplay]="'inline'"></span><br>
          <div>
              <input type="text" [(ngModel)]="bgImage.value"> <br>
          </div>
        </div>

      </div>
    </div>
  `
})
export class BackgroundSidebar implements OnChanges {

  @Input() set event(event: BlockEvent | BlockEvent) {
    this.block = event.block;
    this.bgColor = this.block.getParam('backgroundColor') as Background;
    this.bgImage = this.block.getParam('backgroundImage') as Background;
  }

  private block: TemplateBlock;

  private color: string;

  private bgColor: Background;

  private bgImage: Background;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.bgColor.value = this.color;
    }
  }
}






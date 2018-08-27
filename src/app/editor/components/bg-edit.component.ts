import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';
import {LayoutService} from '../services/layout.service';
import {Subscription} from 'rxjs/Subscription';

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
        <div *ngIf="this.blockToEdit" class="text-center">
          <h3> LAYOUT OPTIONS </h3>
          <span [(colorPicker)]="color"
                [style.background]="color"
                [cpOutputFormat]="'rgba'"
                [cpToggle]="true"
                [cpDialogDisplay]="'inline'"></span><br>
          <div>
            <button class="btn" (click)="setColor()">Set Background</button>
          </div><br>
          <div>
            <div><input type="text" [(ngModel)]="imageUrl"></div>
            <button class="btn" (click)="setImage()">Set Image</button>
          </div>
        </div>

      </div>


    </div>
  `
})
export class BgEditComponent implements OnInit {

  private blockToEdit: TemplateBlock;
  private color: string;
  private imageUrl: string;

  public constructor(private layoutService: LayoutService) {}

  public ngOnInit() {
      this.layoutService.blockStream$.subscribe(
       block => {
         this.blockToEdit = block;
         this.color = block.getParam('bgColor');
       });
  }

  public setColor() {
    this.blockToEdit.setParam('bgColor', this.color);
  }

  public setImage() {
    this.blockToEdit.setParam('bgImage', this.imageUrl);
  }


}






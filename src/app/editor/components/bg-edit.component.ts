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
          <button class="btn" (click)="setColor()">Set Background</button>
        </div>
        <div *ngIf="!this.blockToEdit"> Seleziona un blocco </div>
      </div>
    </div>
  `
})
export class BgEditComponent implements OnInit {

  public subscription: Subscription;
  public blockToEdit: TemplateBlock;
  public color: string;

  public constructor(private layoutService: LayoutService) {}

  public ngOnInit() {
     this.subscription = this.layoutService.blockStream$.subscribe(
       block => {
         this.blockToEdit = block;
         this.color = block.getParam('bgColor');
       });
     console.log(this.blockToEdit);
  }

  public setColor() {
    this.blockToEdit.setParam('bgColor', this.color);
  }


}






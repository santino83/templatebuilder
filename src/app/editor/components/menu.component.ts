import {Component, ViewEncapsulation} from '@angular/core';
import {BLOCKS} from '../blocks';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-menu',
  styles: [` 
    .block-sidebar{
      margin: unset !important;
      padding: unset !important;
    }
  `] ,
  template: `    
    <ngx-dnd-container class="block-sidebar"
                       [model]="models"
                       [copy]="true"
                       [dropZones]="['builder-target']">
      <ng-template let-item="model">
<<<<<<< HEAD
        <div *ngIf="item.thumbnail">
          <img [src]="item.thumbnail" width="300px" height="57px">
=======
        <div *ngIf="item.image">
          <img [src]="item.image" width="400px" height="auto">
>>>>>>> contents-blocks
        </div>
        <div *ngIf="!item.thumbnail">
          {{ item.name }} - {{ item.description }}
        </div>
      </ng-template>
    </ngx-dnd-container>

  `
})
export class MenuComponent {

  public models = [];

  public constructor() {
<<<<<<< HEAD
    BLOCKS.forEach( (value: object, key: string) => {
      this.models.push(value['info']);
=======
    BLOCKS.forEach( (value: any, key: string) => {
      this.models.push(value.info);
>>>>>>> contents-blocks
    });
  }
}

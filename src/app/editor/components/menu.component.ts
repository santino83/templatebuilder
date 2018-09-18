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
        <div *ngIf="item.image">
          <img [src]="item.image" width="300px" height="57px">
        </div>
        <div *ngIf="!item.image">
          {{ item.name }} - {{ item.description }}
        </div>
      </ng-template>
    </ngx-dnd-container>

  `
})
export class MenuComponent {

  public models = [];

  public constructor() {
    BLOCKS.forEach( (value: object, key: string) => {
      this.models.push(value['info']);
    });
  }
}

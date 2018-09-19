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
        
        <div *ngIf="item.thumbnail">
          <img [src]="item.thumbnail" width="400px" height="auto">
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

    BLOCKS.forEach( (value: any, key: string) => {
      this.models.push(value.info);

    });
  }
}

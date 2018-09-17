import {Component, ViewEncapsulation} from '@angular/core';
import {BLOCKS} from '../blocks';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-menu',
  template: `    
    <ngx-dnd-container [model]="models"
                       [copy]="true"
                       [dropZones]="['builder-target']">
      <ng-template let-item="model">
        {{ item.name }} - {{ item.description }}
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

import {Component, ViewEncapsulation} from '@angular/core';
import {Content01Block} from '../blocks/contents/content-01.block';

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
    this.models.push(Content01Block.INFO);
  }
}

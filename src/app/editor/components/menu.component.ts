import {Component, ViewEncapsulation} from '@angular/core';
import {Content00Block} from '../blocks/contents/content-00.block';
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
    this.models.push(Content00Block.INFO, Content01Block.INFO);
  }
}

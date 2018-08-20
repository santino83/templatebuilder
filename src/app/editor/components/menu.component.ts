import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Content01Block} from '../blocks/contents/content-01.block';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-menu',
  /* template: `
     <ul>
       <li *ngFor="let category of categories">
         <a class="btn btn-primary">{{ category }}</a>
         <ul>
           <li *ngFor="let info of getBlocks(category)">
             <a (click)="onSelected(info)">{{ info.name }} - {{ info.description }}</a>
           </li>
         </ul>
       </li>
     </ul>
   `*/
  template: `

    <ngx-dnd-container [model]="models"
                       [copy]="true"
                       [dropZones]="['builder-target']"
                       (drag)="log($event)">
      <ng-template let-item="model">
        {{ item.name }} - {{ item.description }}
      </ng-template>
    </ngx-dnd-container>

  `
})
export class MenuComponent implements OnInit {

  public categories: string[] = [];

  public models = [];

  public constructor() {

    this.models.push(Content01Block.INFO);
  }

  public log(e: any) {

  }

  public ngOnInit(): void {
  }

}

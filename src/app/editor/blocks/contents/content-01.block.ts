import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {BlockInfo, CATEGORY_CONTENT} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-01',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-md-8 text-center">
            <h1>
              <template-text-edit
                [toolbar]="'text'"
                [ngModel]="getParam('title')"
                (editing)="isEditing($event)"
                (changed)="setParam('title',$event)"></template-text-edit>
            </h1>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Content01Block extends TemplateBlock {

  public static readonly ID: string = 'Content01Block';
  public static readonly NAME: string = 'Content 01 Block';
  public static readonly DESCRIPTION: string = 'Simple content block';
  public static readonly INFO: BlockInfo = {
    id: Content01Block.ID,
    name: Content01Block.NAME,
    description: Content01Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      title: {type: 'text', def: 'Title'}
    }
  };

  constructor() {
    super(Content01Block.INFO);
  }

}

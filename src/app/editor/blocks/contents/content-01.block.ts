import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {BlockInfo, CATEGORY_CONTENT} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-01',
  template: `
    <section class="fdb-block" [instance]="this">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-md-8 text-center">
            <h1 [param]="getParam('title')"
                (changed)="setParam('title',$event)">
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
      title: {type: 'text', def: 'Title'},
      titlea: {type: 'text', def: 'Title a'},
      titleb: {type: 'text', def: 'Title b'},
      titlec: {type: 'text', def: 'Title c'},
      titled: {type: 'text', def: 'Title d'},
      bgColor: {type: 'background', def: '#99ffcc'},
      bgImage: {type: 'image', def: ''}
    }
  };

  constructor() {
    super(Content01Block.INFO);
  }

}

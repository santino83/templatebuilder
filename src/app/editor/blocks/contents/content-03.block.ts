import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-03',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          <div class="col col-sm-10 col-md-8 text-left">
            <p [input]="get('text')"></p>
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content03Block extends TemplateBlock {

  public static readonly ID: string = 'Content03Block';
  public static readonly NAME: string = 'Content 03 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/3.jpg';
  public static readonly DESCRIPTION: string = 'Content block with a left paragraph';
  public static readonly INFO: BlockInfo = {
    id: Content03Block.ID,
    name: Content03Block.NAME,
    thumbnail: Content03Block.THUMBNAIL,
    description: Content03Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffff'),

      /* TITLE AND PARAGRAPH */
      text: new Text( ElementType.PARAGRAPH,
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, here live the blind texts. ' +
        'Separated they live right at the coast of the Semantics, a large language ocean.'),

    }
  };

  constructor() {
    super(Content03Block.INFO);
  }
}

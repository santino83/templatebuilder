import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Link, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-02',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-md-8 text-center">
            <p [input]="get('text')"></p>
            <a [input]="get('link')"></a>
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content02Block extends TemplateBlock {

  public static readonly ID: string = 'Content02Block';
  public static readonly NAME: string = 'Content 02 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/2.jpg';
  public static readonly DESCRIPTION: string = 'Content block just one title';
  public static readonly INFO: BlockInfo = {
    id: Content02Block.ID,
    name: Content02Block.NAME,
    thumbnail: Content02Block.THUMBNAIL,
    description: Content02Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background(ElementType.BG_COLOR, '#ffffff'),

      /* TITLE AND PARAGRAPH */
      text: new Text(ElementType.PARAGRAPH,
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, here live the blind texts. ' +
        'Separated they live right at the coast of the Semantics, a large language ocean.'),

      /* BUTTONS AND LINK */
      link: new Link(ElementType.LINK, 'Bookmarksgrove', 'http://#')

      /* IMAGES */

    }
  };

  public constructor() {
    super(Content02Block.INFO);
  }
}

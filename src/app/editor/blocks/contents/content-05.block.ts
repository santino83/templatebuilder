import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-05',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          <div class="col text-center">

            <div class="row text-left pt-4">
              <div class="col-12 col-md-6">
                <p [input]="get('text1')"></p>
              </div>
              <div class="col-12 col-md-6">
                <p [input]="get('text2')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content05Block extends TemplateBlock {

  public static readonly ID: string = 'Content05Block';
  public static readonly NAME: string = 'Content 05 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/5.jpg';
  public static readonly DESCRIPTION: string = 'Content block with a right paragraph';
  public static readonly INFO: BlockInfo = {
    id: Content05Block.ID,
    name: Content05Block.NAME,
    thumbnail: Content05Block.THUMBNAIL,
    description: Content05Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background( ElementType.BG_IMAGE, ''),


      /* TITLE AND PARAGRAPH */
      text1: new Text( ElementType.PARAGRAPH,
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, ' +
        'there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, ' +
        'a large language ocean. A small river named Duden flows by their place far far away.'),

      text2: new Text( ElementType.PARAGRAPH,
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, ' +
        'there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, ' +
        'a large language ocean. A small river named Duden flows by their place far far away.'),


    }
  };

  constructor() {
    super(Content05Block.INFO);
  }
}

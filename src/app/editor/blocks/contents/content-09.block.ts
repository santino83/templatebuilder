import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Image, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-09',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          
          <div class="col-sm">
            <h1 [input]="get('title')"></h1>
            <p [input]="get('text1')"></p>
          </div>
          
          <div class="col-sm text-center">
            <img [input]="get('image1')">
          </div>
          
        </div>
      </div>
    </section>

  `
})
export class Content09Block extends TemplateBlock {

  public static readonly ID: string = 'Content09Block';
  public static readonly NAME: string = 'Content 09 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/9.jpg';
  public static readonly DESCRIPTION: string = 'Text left and image';
  public static readonly INFO: BlockInfo = {
    id: Content09Block.ID,
    name: Content09Block.NAME,
    thumbnail: Content09Block.THUMBNAIL,
    description: Content09Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background(ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background(ElementType.BG_IMAGE, ''),

      /* TITLE AND PARAGRAPH */
      title: new Text(ElementType.TITLE, 'Call to Action'),
      text1: new Text(ElementType.PARAGRAPH,
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, here live the blind texts. ' +
        'Separated they live right at the coast of the Semantics, a large language ocean.'),

      /* BUTTONS AND LINK */

      /* IMAGES */
      image1: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_1.jpg').width('280').height('180'),

    }
  };

  constructor() {
    super(Content09Block.INFO);
  }
}

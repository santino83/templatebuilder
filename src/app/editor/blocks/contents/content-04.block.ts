import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-04',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col col-sm-10 col-md-8 text-right">
            <p [input]="get('text')"></p>
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content04Block extends TemplateBlock {

  public static readonly ID: string = 'Content04Block';
  public static readonly NAME: string = 'Content 04 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/4.jpg';
  public static readonly DESCRIPTION: string = 'Content block with a right paragraph';
  public static readonly INFO: BlockInfo = {
    id: Content04Block.ID,
    name: Content04Block.NAME,
    thumbnail: Content04Block.THUMBNAIL,
    description: Content04Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background( ElementType.BG_IMAGE, ''),


      /* TITLE AND PARAGRAPH */
      text: new Text( ElementType.PARAGRAPH,
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day ' +
        'however a small line of blind text by the name of Lorem Ipsum decided to leave for the far'),

    }
  };

  constructor() {
    super(Content04Block.INFO);
  }
}

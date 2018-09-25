import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Image, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-07',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <img [input]="get('image1')" width="230px" height="160px">
            <img [input]="get('image2')" width="230px" height="160px">
            <img [input]="get('image3')" width="230px" height="160px">
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content07Block extends TemplateBlock {

  public static readonly ID: string = 'Content07Block';
  public static readonly NAME: string = 'Content 07 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/7.jpg';
  public static readonly DESCRIPTION: string = 'Title and subtitle';
  public static readonly INFO: BlockInfo = {
    id: Content07Block.ID,
    name: Content07Block.NAME,
    thumbnail: Content07Block.THUMBNAIL,
    description: Content07Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background(ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background(ElementType.BG_IMAGE, ''),


      /* TITLE AND PARAGRAPH */
      image1: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_1.jpg'),
      image2: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_2.jpg'),
      image3: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_1.jpg'),
    }
  };

  constructor() {
    super(Content07Block.INFO);
  }
}

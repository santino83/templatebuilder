import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Image} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-08',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          
          <div class="col-sm">
            <img [input]="get('image1')">
          </div>
          
          <div class="col-sm">
            <img [input]="get('image2')">
          </div>
          
          <div class="col-sm">
            <img [input]="get('image3')">
          </div>
          
          <div class="col-sm">
            <img [input]="get('image3')">
          </div>
          
        </div>
      </div>
    </section>

  `
})
export class Content08Block extends TemplateBlock {

  public static readonly ID: string = 'Content08Block';
  public static readonly NAME: string = 'Content 08 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/8.jpg';
  public static readonly DESCRIPTION: string = 'Four images inline';
  public static readonly INFO: BlockInfo = {
    id: Content08Block.ID,
    name: Content08Block.NAME,
    thumbnail: Content08Block.THUMBNAIL,
    description: Content08Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background(ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background(ElementType.BG_IMAGE, ''),


      /* TITLE AND PARAGRAPH */
      image1: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_1.jpg').width('230').height('130'),
      image2: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_2.jpg').width('230').height('130'),
      image3: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_1.jpg').width('230').height('130'),
      image4: new Image(ElementType.IMAGE, '../../assets/imgs/froala/colors_wide_1.jpg').width('230').height('130'),
    }
  };

  constructor() {
    super(Content08Block.INFO);
  }
}

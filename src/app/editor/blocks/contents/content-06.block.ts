import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, ElementType, Text} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-06',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 [input]="get('title')"></h1>
            <h2 [input]="get('subTitle')"></h2>
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content06Block extends TemplateBlock {

  public static readonly ID: string = 'Content06Block';
  public static readonly NAME: string = 'Content 06 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/6.jpg';
  public static readonly DESCRIPTION: string = 'Title and subtitle';
  public static readonly INFO: BlockInfo = {
    id: Content06Block.ID,
    name: Content06Block.NAME,
    thumbnail: Content06Block.THUMBNAIL,
    description: Content06Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background(ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background(ElementType.BG_IMAGE, ''),


      /* TITLE AND PARAGRAPH */
      title: new Text(ElementType.TITLE, 'Sample Title'),
      subTitle: new Text(ElementType.TITLE, 'Sample SubTitle'),
    }
  };

  constructor() {
    super(Content06Block.INFO);
  }
}

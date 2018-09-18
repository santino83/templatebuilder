import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, Text, ElementType} from '../../template-editor.types';
import {EditorService} from '../../services/editor.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-01',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-md-8 text-center">
            <h1 [param]="getFullParam('title')"></h1>
          </div>
        </div>
      </div>
    </section>

  `
})
export class Content01Block extends TemplateBlock {

  public static readonly ID: string = 'Content01Block';
  public static readonly NAME: string = 'Content 01 Block';
  public static readonly THUMBNAIL: string = '../../assets/imgs/blocks/contents/1.jpg';
  public static readonly DESCRIPTION: string = 'Content block just one title';
  public static readonly INFO: BlockInfo = {
    id: Content01Block.ID,
    name: Content01Block.NAME,
    thumbnail: Content01Block.THUMBNAIL,
    description: Content01Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffff'),

      /* TITLE AND PARAGRAPH */
      title: new Text( ElementType.TITLE, 'Sample Title'),

      /* BUTTONS AND LINK */

      /* IMAGES */
    }
  };

  constructor(editor: EditorService) {
    super(Content01Block.INFO, editor);
  }
}

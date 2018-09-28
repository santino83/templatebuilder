import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, CATEGORY_CONTENT, Text, ElementType} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-footer-01',
  template: `
    <footer class="fdb-block footer-small">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <p [input]="get('text')"></p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class Footer01Block extends TemplateBlock {

  public static readonly ID: string = 'Footer01Block';
  public static readonly NAME: string = 'Footer 01 Block';
  public static readonly THUMBNAIL: string = '';
  public static readonly DESCRIPTION: string = 'Content block just one title';
  public static readonly INFO: BlockInfo = {
    id: Footer01Block.ID,
    name: Footer01Block.NAME,
    thumbnail: Footer01Block.THUMBNAIL,
    description: Footer01Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      /* LAYOUT AND COLOR */
      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffff'),
      backgroundImage: new Background( ElementType.BG_IMAGE, ''),

      /* TITLE AND PARAGRAPH */
      text: new Text( ElementType.PARAGRAPH, '&copy; 2017 Froala. All Rights Reserved'),

      /* BUTTONS AND LINK */

      /* IMAGES */
    }
  };

  constructor() {
    super(Footer01Block.INFO);
  }
}

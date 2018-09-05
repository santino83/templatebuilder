import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, Button, Link, CATEGORY_CONTENT, Text, ElementType} from '../../template-editor.types';
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
            <a class="btn" [param]="getFullParam('btn')"></a>
            <a [param]="getFullParam('link')"></a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Content01Block extends TemplateBlock {

  public static readonly ID: string = 'Content01Block';
  public static readonly NAME: string = 'Content 01 Block';
  public static readonly DESCRIPTION: string = 'Simple content block';
  public static readonly INFO: BlockInfo = {
    id: Content01Block.ID,
    name: Content01Block.NAME,
    description: Content01Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      title: new Text( ElementType.TITLE, 'Title'),
      backgroundColor: new Background( ElementType.BG_COLOR, '#99ffcc'),
      backgroundImage: new Background( ElementType.BG_IMAGE, ''),
      btn: new Button( ElementType.BUTTON, 'Google', 'http://google.it'),
      link: new Link( ElementType.LINK, 'A Link', 'http://google.com')
    }
  };

  constructor(editor: EditorService) {
    super(Content01Block.INFO, editor);
  }
}

import {Component, ViewEncapsulation} from '@angular/core';
import {TemplateBlock} from '../template.block';
import {Background, BlockInfo, Button, CATEGORY_CONTENT, Text, ElementType, Image} from '../../template-editor.types';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-blocks-content-00',
  template: `
    <section class="fdb-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <h1 [input]="get('title')"></h1>
            <p [input]="get('p1')"></p>
            <a class="btn" [input]="get('b1')"></a>
          </div>
        </div>

        <div class="row pt-5 pb-3">
          <div class="col-12 text-center">
            <p [input]="get('p2')"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <img [input]="get('img1')" class="ml-3 mr-3 mb-2 mt-2">
            <img [input]="get('img2')" class="ml-3 mr-3 mb-2 mt-2">
            <img [input]="get('img3')" class="ml-3 mr-3 mb-2 mt-2">
            <img [input]="get('img4')" class="ml-3 mr-3 mb-2 mt-2">

          </div>
        </div>
      </div>
    </section>
  `
})
export class Content00Block extends TemplateBlock {

  public static readonly ID: string = 'Content00Block';
  public static readonly NAME: string = 'Content 00 Block';
  public static readonly DESCRIPTION: string = 'Simple content block';
  public static readonly INFO: BlockInfo = {
    id: Content00Block.ID,
    name: Content00Block.NAME,
    description: Content00Block.DESCRIPTION,
    categories: [CATEGORY_CONTENT],
    metadata: {
      title: new Text(ElementType.TITLE, 'Call to Action'),

      p1: new Text(ElementType.PARAGRAPH, `
      Far far away, behind the word mountains, 
      far from the countries Vokalia and Consonantia, 
      there live the blind texts`),

      b1: new Button(ElementType.BUTTON, 'Download', 'https://www.froala.com'),

      p2: new Text(ElementType.PARAGRAPH, 'Fortune 100 companies are using our products'),

      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffaa'),

      backgroundImage: new Background( ElementType.BG_IMAGE, ''),

      img1: new Image(ElementType.IMAGE, 'https://picsum.photos/200/300').height('30').width('60'),
      img2: new Image(ElementType.IMAGE, 'https://picsum.photos/200/301').height('30').width('60'),
      img3: new Image(ElementType.IMAGE, 'https://picsum.photos/200/302').height('30').width('60'),
      img4: new Image(ElementType.IMAGE, 'https://picsum.photos/200/303').height('30').width('60'),

    }
  };

  constructor() {
    super(Content00Block.INFO);
  }
}

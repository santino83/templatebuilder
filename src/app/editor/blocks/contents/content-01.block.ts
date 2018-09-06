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
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <h1 [param]="getFullParam('title')"></h1>
            <p class="text-h3" [param]="getFullParam('p1')"></p>
            <a class="btn" [param]="getFullParam('a1')"></a>
          </div>
        </div>

        <div class="row pt-5 pb-3">
          <div class="col-12 text-center">
            <p [param]="getFullParam('p2')" style="font-weight: bold"></p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="assets/imgs/froala/customers/adobe.svg">
            <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="assets/imgs/froala/customers/discovery.svg">
            <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="assets/imgs/froala/customers/ebay.svg">
            <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="assets/imgs/froala/customers/samsung.svg">
            <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="assets/imgs/froala/customers/orange.svg">
            <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="assets/imgs/froala/customers/salesforce.svg">
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
      title: new Text( ElementType.TITLE, 'Call to Action'),

      p1: new Text(ElementType.PARAGRAPH, `
      Far far away, behind the word mountains, 
      far from the countries Vokalia and Consonantia, 
      there live the blind texts`),

      a1: new Link(ElementType.LINK, 'Download', 'https://www.froala.com'),

      p2: new Text(ElementType.PARAGRAPH, 'Fortune 100 companies are using our products'),

      backgroundColor: new Background( ElementType.BG_COLOR, '#ffffaa'),

      backgroundImage: new Background( ElementType.BG_IMAGE, ''),
    }
  };

  constructor(editor: EditorService) {
    super(Content01Block.INFO, editor);
  }
}

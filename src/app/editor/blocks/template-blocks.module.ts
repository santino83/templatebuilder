import {NgModule} from '@angular/core';
import {Content00Block} from './contents/content-00.block';
import {TextEditComponent} from '../components/text-edit.component';
import {HeaderDirective} from '../directives/editors/text/header.directive';
import {BackgroundDirective} from '../directives/editors/background.directive';
import {ParagraphDirective} from '../directives/editors/text/paragraph.directive';
import {SanitizeHtmlPipe} from '../pipes/sanitize-html.pipe';
import {AnchorDirective} from '../directives/editors/anchor.directive';
import {ImageDirective} from '../directives/editors/image.directive';
import {TemplateSharedModule} from '../shared/template-shared.module';
import {QuillModule} from 'ngx-quill';
import {Content01Block} from './contents/content-01.block';
import {Content02Block} from './contents/content-02.block';
import {Content03Block} from './contents/content-03.block';

@NgModule({
  declarations: [
    /** components */
    TextEditComponent,
    /** blocks **/
    Content00Block,
    Content01Block,
    Content02Block,
    Content03Block,
    /** directives */
    HeaderDirective,
    ParagraphDirective,
    AnchorDirective,
    BackgroundDirective,
    ImageDirective,
    /** pipes */
    SanitizeHtmlPipe
  ],
  exports: [],
  entryComponents: [
    Content00Block,
    Content01Block,
    Content02Block,
    Content03Block,
    TextEditComponent
  ],
  imports: [
    TemplateSharedModule,
    QuillModule
  ]
})
export class TemplateBlocksModule {

}

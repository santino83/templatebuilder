import {NgModule} from '@angular/core';
import {TextEditComponent} from '../components/text-edit.component';
import {HeaderDirective} from '../directives/editors/text/header.directive';
import {BackgroundDirective} from '../directives/editors/background.directive';
import {ParagraphDirective} from '../directives/editors/text/paragraph.directive';
import {SanitizeHtmlPipe} from '../pipes/sanitize-html.pipe';
import {AnchorDirective} from '../directives/editors/anchor.directive';
import {ImageDirective} from '../directives/editors/image.directive';
import {TemplateSharedModule} from '../shared/template-shared.module';
import {QuillModule} from 'ngx-quill';
import {contents} from './contents/contents';
import {footers} from './footers/footers';

@NgModule({
  declarations: [
    /** components */
    TextEditComponent,
    /** blocks **/
    ...contents,
    ...footers,
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
    ...contents,
    ...footers,
    TextEditComponent
  ],
  imports: [
    TemplateSharedModule,
    QuillModule
  ]
})
export class TemplateBlocksModule {

}

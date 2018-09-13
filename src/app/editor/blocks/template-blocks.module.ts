import {NgModule} from '@angular/core';
import {Content01Block} from './contents/content-01.block';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TextEditComponent} from '../components/text-edit.component';
import {MediumEditorDirective} from 'angular2-medium-editor';
import {HeaderDirective} from '../directives/editors/header.directive';
import {BackgroundDirective} from '../directives/editors/background.directive';
import {ParagraphDirective} from '../directives/editors/paragraph.directive';
import {SanitizeHtmlPipe} from '../pipes/sanitize-html.pipe';
import {AnchorDirective} from '../directives/editors/anchor.directive';
import {ImageDirective} from '../directives/editors/image.directive';
import {SharedModule} from 'primeng/shared';
import {TemplateSharedModule} from '../shared/template-shared.module';
import {QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [
    /** components **/
    TextEditComponent,
    /** blocks **/
    Content01Block,
    /** directives **/
    MediumEditorDirective,
    HeaderDirective,
    ParagraphDirective,
    AnchorDirective,
    BackgroundDirective,
    ImageDirective,
    /** pipes **/
    SanitizeHtmlPipe
  ],
  exports: [
    Content01Block,
  ],
  entryComponents: [
    Content01Block,
    TextEditComponent
  ],
  imports: [
    TemplateSharedModule,
    QuillModule
  ]
})
export class TemplateBlocksModule {

}

import {NgModule} from '@angular/core';
import {Content01Block} from './contents/content-01.block';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TextEditComponent} from '../components/text-edit.component';
import {MediumEditorDirective} from 'angular2-medium-editor';
import {HeadingEditorDirective} from '../directives/editors/heading-editor.directive';
import {BlockBackgroundDirective} from '../directives/block-background.directive';
import {ParagraphEditorDirective} from '../directives/editors/paragraph-editor.directive';
import {SanitizeHtmlPipe} from '../pipes/sanitize-html.pipe';

@NgModule({
  declarations: [
    /** components **/
    TextEditComponent,
    /** blocks **/
    Content01Block,
    /** directives **/
    MediumEditorDirective,
    HeadingEditorDirective,
    ParagraphEditorDirective,
    BlockBackgroundDirective,
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
    CommonModule,
    FormsModule,
  ]
})
export class TemplateBlocksModule {

}

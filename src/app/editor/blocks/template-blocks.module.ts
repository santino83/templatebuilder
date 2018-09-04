import {NgModule} from '@angular/core';
import {Content01Block} from './contents/content-01.block';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TextEditComponent} from '../components/text-edit.component';
import {MediumEditorDirective} from 'angular2-medium-editor';
import {HeaderDirective} from '../directives/editors/header.directive';
import {BlockBackgroundDirective} from '../directives/block-background.directive';
import {ParagraphDirective} from '../directives/editors/paragraph.directive';
import {SanitizeHtmlPipe} from '../pipes/sanitize-html.pipe';
import {AnchorDirective} from '../directives/editors/anchor.directive';

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

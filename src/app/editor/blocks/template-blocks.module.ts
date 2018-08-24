import {NgModule} from '@angular/core';
import {Content01Block} from './contents/content-01.block';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TextEditComponent} from '../components/text-edit.component';
import {MediumEditorDirective} from 'angular2-medium-editor';
import {EditorRendererDirective} from '../directives/editor-renderer.directive';
import {BlockBackgroundDirective} from '../directives/block-background.directive';

@NgModule({
  declarations: [
    /** components **/
    TextEditComponent,
    /** blocks **/
    Content01Block,
    /** directives **/
    MediumEditorDirective,
    EditorRendererDirective,
    BlockBackgroundDirective
  ],
  exports: [
    Content01Block
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

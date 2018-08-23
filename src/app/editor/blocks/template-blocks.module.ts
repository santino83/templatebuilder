import {NgModule} from '@angular/core';
import {Content01Block} from './contents/content-01.block';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InlineInputEditComponent} from '../components/inline-input-edit.component';
import {TextEditComponent} from '../components/text-edit.component';
import {MediumEditorDirective} from 'angular2-medium-editor';
import {EditorRendererDirective} from '../directives/editor-renderer.directive';

@NgModule({
  declarations: [
    /** components **/
    InlineInputEditComponent,
    TextEditComponent,
    /** blocks **/
    Content01Block,
    /** directives **/
    MediumEditorDirective,
    EditorRendererDirective
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

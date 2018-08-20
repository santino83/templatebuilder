import {NgModule} from '@angular/core';
import {Content01Block} from './contents/content-01.block';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InlineInputEditComponent} from '../components/inline-input-edit.component';
import {TextEditComponent} from '../components/text-edit.component';
import {CKEditorModule} from 'ng2-ckeditor';

@NgModule({
  declarations: [
    /** components **/
    InlineInputEditComponent,
    TextEditComponent,
    /** blocks **/
    Content01Block
  ],
  exports: [
    Content01Block
  ],
  entryComponents: [
    Content01Block
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ]
})
export class TemplateBlocksModule {

}

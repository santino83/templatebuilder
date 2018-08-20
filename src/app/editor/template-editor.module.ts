import {NgModule} from '@angular/core';
import {TemplateEditorComponent} from './template-editor.component';
import {CommonModule} from '@angular/common';
import {TemplateBlocksModule} from './blocks/template-blocks.module';
import {MenuComponent} from './components/menu.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {BlockRendererDirective} from './directives/block-renderer.directive';

@NgModule({
  declarations: [
    TemplateEditorComponent,
    MenuComponent,
    BlockRendererDirective
  ],
  exports: [
    TemplateEditorComponent
  ],
  imports: [
    CommonModule,
    NgxDnDModule,
    TemplateBlocksModule
  ]
})
export class TemplateEditorModule {
}

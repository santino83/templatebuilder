import {NgModule} from '@angular/core';
import {TemplateEditorComponent} from './template-editor.component';
import {CommonModule} from '@angular/common';
import {TemplateBlocksModule} from './blocks/template-blocks.module';
import {MenuComponent} from './components/menu.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {SidebarModule} from 'ng-sidebar';
import {BgEditComponent} from './components/bg-edit.component';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  declarations: [
    TemplateEditorComponent,
    MenuComponent,
    BgEditComponent,
    BlockRendererDirective
  ],
  exports: [
    TemplateEditorComponent,
  ],
  imports: [
    CommonModule,
    NgxDnDModule,
    TemplateBlocksModule,
    ColorPickerModule,
    SidebarModule.forRoot()
  ]
})
export class TemplateEditorModule {
}

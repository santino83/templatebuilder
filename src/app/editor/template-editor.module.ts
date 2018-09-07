import {NgModule} from '@angular/core';
import {TemplateEditorComponent} from './template-editor.component';
import {CommonModule} from '@angular/common';
import {TemplateBlocksModule} from './blocks/template-blocks.module';
import {MenuComponent} from './components/menu.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {ColorPickerModule} from 'ngx-color-picker';
import {EditorService} from './services/editor.service';
import {FormsModule} from '@angular/forms';
import {SidebarService} from './services/sidebar.service';
import {TemplateSidebarModule} from './components/sidebar/template-sidebar.module';
import {SidebarModule} from 'ng-sidebar';

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
    FormsModule,
    CommonModule,
    NgxDnDModule,
    TemplateBlocksModule,
    TemplateSidebarModule,
    SidebarModule.forRoot()
  ],
  providers: [
    EditorService,
    SidebarService
  ],
})
export class TemplateEditorModule {
}

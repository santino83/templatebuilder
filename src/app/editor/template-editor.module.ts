import {NgModule} from '@angular/core';
import {TemplateEditorComponent} from './template-editor.component';
import {TemplateBlocksModule} from './blocks/template-blocks.module';
import {MenuComponent} from './components/menu.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {EditorService} from './services/editor.service';
import {TemplateSidebarModule} from './components/sidebar/template-sidebar.module';
import {SidebarModule} from 'ng-sidebar';
import {TemplateSharedModule} from './shared/template-shared.module';

@NgModule({
  declarations: [
    TemplateEditorComponent,
    MenuComponent,
    BlockRendererDirective
  ],
  exports: [
    TemplateEditorComponent,
  ],
  imports: [
    NgxDnDModule,
    TemplateBlocksModule,
    TemplateSidebarModule,
    SidebarModule,
    TemplateSharedModule
  ],
  providers: [
    EditorService,
  ],
})
export class TemplateEditorModule {
}

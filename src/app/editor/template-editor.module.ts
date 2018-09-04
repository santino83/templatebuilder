import {NgModule} from '@angular/core';
import {TemplateEditorComponent} from './template-editor.component';
import {CommonModule} from '@angular/common';
import {TemplateBlocksModule} from './blocks/template-blocks.module';
import {MenuComponent} from './components/menu.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {SidebarModule} from 'ng-sidebar';
import {BackgroundComponent} from './components/sidebar/background.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {EditorService} from './services/editor.service';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from './components/sidebar/button.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarService} from './services/sidebar.service';

@NgModule({
  declarations: [
    TemplateEditorComponent,
    MenuComponent,
    BackgroundComponent,
    ButtonComponent,
    SidebarComponent,
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
    ColorPickerModule,
    SidebarModule.forRoot()
  ],
  providers: [
    EditorService,
    SidebarService
  ],
})
export class TemplateEditorModule {
}

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
<<<<<<< HEAD
import {LayoutService} from './services/layout.service';
import {EditorService} from './services/editor.service';
=======
import {EditorService} from './services/editor.service';
import {FormsModule} from '@angular/forms';
>>>>>>> all-in-one

@NgModule({
  declarations: [
    TemplateEditorComponent,
    MenuComponent,
    BgEditComponent,
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
<<<<<<< HEAD
    SidebarModule.forRoot()
  ],
  providers: [
    EditorService,
    LayoutService
=======
    SidebarModule.forRoot(),
  ],
  providers: [
    EditorService,
>>>>>>> all-in-one
  ]
})
export class TemplateEditorModule {
}

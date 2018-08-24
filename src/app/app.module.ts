import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TemplateEditorModule} from './editor/template-editor.module';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {EditorService} from './editor/services/editor.service';
import {LayoutService} from './editor/services/layout.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDnDModule,
    TemplateEditorModule,
  ],
  providers: [
    EditorService,
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

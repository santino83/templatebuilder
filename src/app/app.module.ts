import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TemplateEditorModule} from './editor/template-editor.module';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    NgxDnDModule,
    TemplateEditorModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

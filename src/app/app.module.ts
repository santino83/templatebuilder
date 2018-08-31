import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TemplateEditorModule} from './editor/template-editor.module';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
<<<<<<< HEAD
=======
import {FormsModule} from '@angular/forms';
>>>>>>> all-in-one

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDnDModule,
    TemplateEditorModule,
  ],
<<<<<<< HEAD
  providers: [
  ],
=======
>>>>>>> all-in-one
  bootstrap: [AppComponent]
})
export class AppModule { }

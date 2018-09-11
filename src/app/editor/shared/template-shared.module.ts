import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule, TabViewModule} from 'primeng/primeng';

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    TabViewModule,
    InputTextModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    InputTextModule

  ],
})
export class TemplateSharedModule {

}

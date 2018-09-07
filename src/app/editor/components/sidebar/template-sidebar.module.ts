import {NgModule} from '@angular/core';
import {SidebarModule} from 'ng-sidebar';
import {ImageComponent} from './image.component';
import {SidebarComponent} from './sidebar.component';
import {LinkComponent} from './link.component';
import {ButtonComponent} from './button.component';
import {BackgroundComponent} from './background.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  declarations: [
    BackgroundComponent,
    ButtonComponent,
    LinkComponent,
    SidebarComponent,
    ImageComponent,
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ColorPickerModule
  ],
})
export class TemplateSidebarModule {
}

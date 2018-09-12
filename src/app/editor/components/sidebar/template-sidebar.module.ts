import {NgModule} from '@angular/core';
import {ImageComponent} from './image/image.component';
import {SidebarComponent} from './sidebar.component';
import {LinkComponent} from './link.component';
import {ButtonComponent} from './button.component';
import {BackgroundComponent} from './background.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {TemplateSharedModule} from '../../shared/template-shared.module';
import {ModalComponent} from './image/modal.component';
import {LibraryPanel} from './image/panels/library.panel';
import {UploadPanel} from './image/panels/upload.panel';
import {UrlPanel} from './image/panels/url.panel';

@NgModule({
  declarations: [
    BackgroundComponent,
    ButtonComponent,
    LinkComponent,
    SidebarComponent,
    ImageComponent,
    ModalComponent,
    LibraryPanel,
    UploadPanel,
    UrlPanel
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    ColorPickerModule,
    TemplateSharedModule
  ],
})
export class TemplateSidebarModule {
}

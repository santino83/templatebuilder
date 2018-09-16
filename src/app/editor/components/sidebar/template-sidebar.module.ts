import {NgModule} from '@angular/core';
import {ImageSidebar} from './image/image.sidebar';
import {SidebarSidebar} from './sidebar.sidebar';
import {LinkSidebar} from './link/link.sidebar';
import {ButtonSidebar} from './link/button.sidebar';
import {BackgroundSidebar} from './background.sidebar';
import {ColorPickerModule} from 'ngx-color-picker';
import {TemplateSharedModule} from '../../shared/template-shared.module';
import {ModalComponent} from './image/modal.component';
import {LibraryPanel} from './image/panels/library/library.panel';
import {UploadPanel} from './image/panels/upload.panel';
import {UrlPanel} from './image/panels/url.panel';
import {ImageClickableDirective} from './image/panels/library/image-clickable.directive';

@NgModule({
  declarations: [
    /** sidebars */
    BackgroundSidebar,
    ButtonSidebar,
    LinkSidebar,
    SidebarSidebar,
    ImageSidebar,
    /** components */
    ModalComponent,
    /** panels */
    LibraryPanel,
    UploadPanel,
    UrlPanel,
    /** directives */
    ImageClickableDirective
  ],
  exports: [
    SidebarSidebar
  ],
  imports: [
    ColorPickerModule,
    TemplateSharedModule
  ],
})
export class TemplateSidebarModule {
}

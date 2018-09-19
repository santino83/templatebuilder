import {Component, OnInit} from '@angular/core';
import {BlockEvent, Parameter, SidebarType} from '../../template-editor.types';
import {EditorService} from '../../services/editor.service';
import {TemplateBlock} from '../../blocks/template.block';

@Component({
  selector: 'template-sidebar',
  template: `
    <div [ngSwitch]="type">
      <template-background-sidebar
        [event]="block"
        *ngSwitchCase="typeEnum.BACKGROUND">
      </template-background-sidebar>
      
      <template-button-sidebar 
        [param]="param" 
        *ngSwitchCase="typeEnum.BUTTON">
      </template-button-sidebar>

      <template-link-sidebar
        [param]="param"
        *ngSwitchCase="typeEnum.LINK">
      </template-link-sidebar>

      <template-image-sidebar
        [param]="param"
        *ngSwitchCase="typeEnum.IMAGE">
      </template-image-sidebar>
    </div>
  `
})
export class MainSidebar implements OnInit {

  private typeEnum = SidebarType;

  private block: TemplateBlock;

  private type: SidebarType;

  private param: Parameter;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
        .blockStream
        .subscribe((event: BlockEvent) => {
          this.block = event.block;
          this.type = event.sidebar;
          this.param = event.param;
          }
        );
  }
}

import {Component, OnInit} from '@angular/core';
import {SidebarType} from '../../template-editor.types';
import {SidebarService} from '../../services/sidebar.service';

@Component({
  selector: 'template-sidebar',
  template: `
    <div [ngSwitch]="type">
      <template-background-sidebar
        *ngSwitchCase="typeEnum.BACKGROUND">
      </template-background-sidebar>
      
      <template-button-sidebar 
        [name]="paramName" 
        *ngSwitchCase="typeEnum.BUTTON">
      </template-button-sidebar>

      <template-link-sidebar
        [name]="paramName"
        *ngSwitchCase="typeEnum.LINK">
      </template-link-sidebar>

      <template-image-sidebar
        [name]="paramName"
        *ngSwitchCase="typeEnum.IMAGE">
      </template-image-sidebar>
    </div>
  `
})
export class SidebarSidebar implements OnInit {
  private typeEnum = SidebarType;
  private type: SidebarType;
  private paramName: string;

  public constructor(private sidebar: SidebarService) {}

  public ngOnInit() {
    this.sidebar
        .selected$
        .subscribe(obj => {
            this.type = obj.type;
            if (obj.paramName) {
              this.paramName = obj.paramName;
            }
          }
        );
  }
}

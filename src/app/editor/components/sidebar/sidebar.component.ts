import {Component, OnInit} from '@angular/core';
import {SidebarType} from '../../template-editor.types';
import {SidebarService} from '../../services/sidebar.service';

@Component({
  selector: 'template-sidebar',
  template: `
    <div [ngSwitch]="content">
      <template-background-sidebar *ngSwitchCase="type.BACKGROUND"></template-background-sidebar>
      <template-button-sidebar *ngSwitchCase="type.BUTTON"></template-button-sidebar>
    </div>
  `
})
export class SidebarComponent implements OnInit {
  private type = SidebarType;
  private content: SidebarType;

  public constructor(private sidebar: SidebarService) {}

  public ngOnInit() {
    this.sidebar
        .selected
        .subscribe(cont => this.content = cont);
  }
}

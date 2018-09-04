import {EventEmitter, Injectable} from '@angular/core';
import {SidebarEvent, SidebarType} from '../template-editor.types';

@Injectable()
export class SidebarService {
  public selected: EventEmitter<SidebarEvent> = new EventEmitter<SidebarEvent>();

  public set(type: SidebarType, paramName?: string) {
    if (paramName) {
      this.selected.next({
        type: type,
        paramName: paramName
      });
    } else {
        this.selected.next({
          type: type
        });
      }
  }

  public unset() {
    this.selected.next({
      type: undefined,
      paramName: undefined
    });
  }
}

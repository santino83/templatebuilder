import {EventEmitter, Injectable} from '@angular/core';
import {SidebarType} from '../template-editor.types';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SidebarService {

  private elementNameSource = new ReplaySubject<string>(1);
  private readonly elementNameStream = this.elementNameSource.asObservable();

  public selected: EventEmitter<SidebarType> = new EventEmitter<SidebarType>();

  public setSidebar(content: SidebarType) {
    this.selected.next(content);
  }

  public unsetSidebar() {
    this.selected.next(undefined);
  }

  get elementName$(){
    return this.elementNameStream;
  }

  public setElementName(name: string): void {
    this.elementNameSource.next(name);
  }
}

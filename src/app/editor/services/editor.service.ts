import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EditorService {

  public editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  public lock(): void {
    this.editing.next(true);
  }

  public unlock(): void {
    this.editing.next(false);
  }

}

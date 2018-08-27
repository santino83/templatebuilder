import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EditorService {

  private _editing: boolean;
  public editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  public lock(): void {
    this.editing.next(true);
    this._editing = true;
  }

  public unlock(): void {
    this.editing.next(false);
    this._editing = false;
  }

  public isLocked(): boolean {
    return this._editing;
  }

}

import {EventEmitter, Injectable} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BlockEvent, Parameter} from '../template-editor.types';

@Injectable()
export class EditorService {

  private blockSource = new ReplaySubject<BlockEvent>(1);
  private readonly blockStream = this.blockSource.asObservable();

  private editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  get blockStream$() {
    return this.blockStream;
  }

  get editing$() {
    return this.editing;
  }

  public set(block: TemplateBlock, param?: Parameter): void {
    if (param) {
      this.blockSource.next({block, param});
    }
    this.blockSource.next({block});
  }

  public getBlock(): any {
    return this.blockSource._getNow();
  }

  public lock(): void {
    this.editing.next(true);
  }

  public unlock(): void {
    this.editing.next(false);
  }
}

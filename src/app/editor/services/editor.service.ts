import {EventEmitter, Injectable} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class EditorService {

  private blockSource = new ReplaySubject<TemplateBlock>(1);

  public editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  public blockStream$ = this.blockSource.asObservable();

  public setBlock(block: TemplateBlock): void {
    this.blockSource.next(block);
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

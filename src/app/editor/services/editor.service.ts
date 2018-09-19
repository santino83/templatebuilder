import {EventEmitter, Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BlockEvent} from '../template-editor.types';

@Injectable()
export class EditorService {

  private selected: BlockEvent;

  private blockSource = new ReplaySubject<BlockEvent>(1);

  public readonly blockStream = this.blockSource.asObservable();

  private editing$: EventEmitter<boolean> = new EventEmitter<boolean>();

  public select(block: BlockEvent): void {
    this.selected = block;
    this.blockSource.next(block);
  }

  public lock(): void {
    this.editing$.next(true);
  }

  public unlock(): void {
    this.editing$.next(false);
  }

  public get editing() {
    return this.editing$;
  }

  public getBlock(): any {
    return this.blockSource._getNow();
  }
}

import {EventEmitter, Injectable} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class EditorService {

  private elementNameSource = new ReplaySubject<string>(1);
  private readonly elementNameStream = this.elementNameSource.asObservable();

  private blockSource = new ReplaySubject<TemplateBlock>(1);
  private readonly blockStream = this.blockSource.asObservable();

  private editing: EventEmitter<boolean> = new EventEmitter<boolean>();


  get blockStream$() {
    return this.blockStream;
  }

  get editing$() {
    return this.editing;
  }

  get elementName$(){
    return this.elementNameStream;
  }

  public setElementName(name: string): void {
    this.elementNameSource.next(name);
  }

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

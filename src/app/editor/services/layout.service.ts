import {Injectable} from '@angular/core';
import {TemplateBlock} from '../blocks/template.block';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class LayoutService {

  private blockSource = new ReplaySubject<TemplateBlock>(1);
  public blockStream$ = this.blockSource.asObservable();

  public setBlock(block: TemplateBlock): void {
    this.blockSource.next(block);
  }

  public getBlock(): any {
    return this.blockSource._getNow();
  }

}

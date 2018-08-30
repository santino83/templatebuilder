import {BlockInfo, BlockParamsBag} from '../template-editor.types';
import {AfterViewInit, HostListener, ViewChild} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {BlockBackgroundDirective} from '../directives/block-background.directive';

export abstract class TemplateBlock implements AfterViewInit {

  private params: BlockParamsBag;

  @ViewChild(BlockBackgroundDirective) private bgDirective: BlockBackgroundDirective;

  protected constructor(info: BlockInfo,
                        private editor: EditorService) {
    this._info = info;
    this.initFromMetadata();
  }

  private _info: BlockInfo;

  public get info() {
    return this._info;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    event.preventDefault();
  }

  @HostListener('dblclick', ['$event'])
  setBlock() {
    this.editor.setBlock(this);
  }

  public setParams(params: { [key: string]: string }) {
    if (!this.params) {
      this.params = new BlockParamsBag();
    }

    this.params.setParams(params);
  }

  public getParam(paramName: string): any {
    return this.params.getParam(paramName);
  }

  public getFullParam(paramName: string): any {
    return {
      name: paramName,
      value: this.params.getParam(paramName)
    };
  }

  public getParams(): any {
    return this.params.getParams();
  }

  public setParam(paramName: string, paramValue: any) {
    this.params.setParam(paramName, paramValue);
  }

  public ngAfterViewInit(): void {
    this.bgDirective.setInstance(this);
  }

  protected initFromMetadata(): void {
    this.params = new BlockParamsBag();
    for (const property in this.info.metadata) {
      this.params.setParam(property, this.info.metadata[property].def || '');
    }
  }

}

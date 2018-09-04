import {BlockInfo, Parameter, Parameters} from '../template-editor.types';
import {AfterViewInit, HostListener, ViewChild} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {BlockBackgroundDirective} from '../directives/block-background.directive';
import {ObjectUtils} from '../deprecated/template-editor.utils';

export abstract class TemplateBlock implements AfterViewInit {

  public params: Parameters;

  protected readonly _info: BlockInfo;

  @ViewChild(BlockBackgroundDirective) private bgDirective: BlockBackgroundDirective;

  protected constructor(info: BlockInfo,
                        private editor: EditorService) {
    this._info = info;
    this.params = ObjectUtils.deepClone(this.info.metadata);
  }

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

  public getParam(paramName: string): any {
    return this.params[paramName];
  }

  public getParamValue(paramName: string, elem: string): any {
    return this.params[paramName][elem];
  }

  public getFullParam(paramName: string): any {
    return {
      name: paramName,
      object: this.params[paramName]
    };
  }

  public getParams(): any {
    return this.params;
  }

  public setParam(paramName: string, paramElem: string, paramValue: any) {
    this.params[paramName][paramElem] = paramValue;
  }

  public setParams(params: Parameters) {
    if (!this.params) {
      this.params = {};
    }

    this.params = ObjectUtils.deepClone(params);
  }

  public ngAfterViewInit(): void {
    this.bgDirective.setInstance(this);
  }
}

import {BlockInfo, Button, Parameter, Parameters} from '../template-editor.types';
import {AfterViewInit, HostListener, ViewChild} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {BackgroundDirective} from '../directives/editors/background.directive';
import {Utils} from '../shared/utils';


export abstract class TemplateBlock implements AfterViewInit {

  public params: Parameters;

  protected readonly _info: BlockInfo;

  @ViewChild(BackgroundDirective) private bgDirective: BackgroundDirective;

  protected constructor(info: BlockInfo,
                        private editor: EditorService) {
    this._info = info;
    this.setParams(this.info.metadata);
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
    this.editor.set(this);
  }

  public getParam(paramName: string): Parameter {
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

  public setParams(obj: Object) {
    if (!this.params) {
      this.params = {};
    }

    for (const key in obj) {
      this.params[key] = Utils.clone(obj[key]);
    }
  }

  public ngAfterViewInit(): void {
    this.bgDirective.setInstance(this);
  }
}

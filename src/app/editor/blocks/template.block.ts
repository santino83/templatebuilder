import {EventEmitter, OnInit, Output} from '@angular/core';
import {BlockInfo, BlockParamsBag} from '../template-editor.types';
import {ObjectUtils} from '../template-editor.utils';

export abstract class TemplateBlock implements OnInit {

  @Output() public changed: EventEmitter<TemplateBlock> = new EventEmitter<TemplateBlock>();

  @Output() public editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  private readonly info: BlockInfo;

  private params: BlockParamsBag;

  protected constructor(info: BlockInfo) {
    this.info = info;
    this.initFromMetadata();
  }

  public ngOnInit(): void {
  }

  public getInfo(): BlockInfo {
    return Object.assign({},
      ObjectUtils.deepClone(this.info),
      {params: ObjectUtils.deepClone(this.getParamsBag().getParams())});
  }

  public setParams(params: { [key: string]: string }) {
    if (!this.params) {
      this.params = new BlockParamsBag();
    }

    this.params.setParams(params);
  }

  public getParamsBag(): BlockParamsBag {
    return this.params;
  }

  public getParam(paramName: string): any {
    return this.getParamsBag().getParam(paramName);
  }

  public setParam(paramName: string, paramValue: any) {
    this.getParamsBag().setParam(paramName, paramValue);
    this.changed.emit(this);
  }

  public isEditing(value: boolean) {
    this.editing.emit(value);
  }

  protected initFromMetadata(): void {
    this.params = new BlockParamsBag();
    for (const property in this.info.metadata) {
      this.params.setParam(property, this.info.metadata[property].def || '');
    }
  }

}

import {BlockInfo, BlockParamsBag} from '../template-editor.types';

export abstract class TemplateBlock {

  private _info: BlockInfo;

  private params: BlockParamsBag;

  protected constructor(info: BlockInfo) {
    this._info = info;
    this.initFromMetadata();
  }

  public get info() {
    return this._info;
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

  public getParams(): any {
    return this.params.getParams();
  }

  public setParam(paramName: string, paramValue: any) {
    this.params.setParam(paramName, paramValue);
  }

  protected initFromMetadata(): void {
    this.params = new BlockParamsBag();
    for (const property in this.info.metadata) {
      this.params.setParam(property, this.info.metadata[property].def || '');
    }
  }

}

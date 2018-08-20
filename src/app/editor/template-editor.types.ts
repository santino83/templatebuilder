import {Type} from '@angular/core/src/type';
import {TemplateBlock} from './blocks/template.block';

export const CATEGORY_CONTENT = 'contents';

export interface BlockDescriptor {

  type: Type<TemplateBlock>;

  info: BlockInfo;

}

export interface BlockInfo {

  id: string;

  name: string;

  image?: string;

  description?: string;

  categories?: string[];

  metadata: BlockMetadata;

  params?: { [key: string]: string };

}

export interface BlockMetadata {
  [key: string]: BlockMetadataValue;
}

export interface BlockMetadataValue {
  type: 'text' | 'image' | 'background';
  def?: string;
}

export class BlockParamsBag {

  private params: Map<string, any> = new Map<string, any>();

  public getParams(): { [key: string]: any } {
    const obj = {};
    this.params.forEach((value, key) => obj[key] = value);
    return obj;
  }

  public getParam(key: string, def?: any): string {
    return this.params.has(key) ? this.params.get(key) : def || '';
  }

  public setParam(key: string, value: any): BlockParamsBag {
    this.params.set(key, value);
    return this;
  }

  public setParams(params: { [key: string]: any }): BlockParamsBag {
    for (const key in params) {
      this.setParam(key, params[key]);
    }
    return this;
  }
}

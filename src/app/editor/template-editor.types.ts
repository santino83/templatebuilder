import {Type} from '@angular/core/src/type';
import {TemplateBlock} from './blocks/template.block';

export const CATEGORY_CONTENT = 'contents';

export enum ElementType {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  PARAGRAPH = 'paragraph',
  BG_COLOR = 'background-color',
  BG_IMAGE = 'background-image',
  BUTTON = 'button'
}

export enum SidebarType {
  BACKGROUND,
  BUTTON
}

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

  metadata: Parameters;

  params?: Parameters;

}

export interface Parameters {
  [key: string]: Parameter;
}

export abstract class Parameter {
  type: ElementType;
  value: any;
  style?: {};

  protected constructor(type: ElementType, value: string) {
    this.type = type;
    this.value = value;
  }
}

export class Text extends Parameter {
  constructor(type: ElementType, value: string) {
    super(type, value);
  }
}

export class Background extends Parameter {
  constructor(type: ElementType, value: string) {
    super(type, value);
  }
}

export class Button extends Parameter {

  private _link: string;

  constructor(type: ElementType, value: string, link: string) {
    super(type, value);
    this._link = link;
    this.style = {
      color: '#ffffff',
      bgColor: '#528bff',
      borderColor: '#528bff',
      borderStyle: 'solid',
      borderWidth: '1'
    };
  }

  public get link(): string {
    return this._link;
  }

  public set link(link: string) {
    this._link = link;
  }
}

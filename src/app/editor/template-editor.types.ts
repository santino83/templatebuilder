import {Type} from '@angular/core/src/type';
import {TemplateBlock} from './blocks/template.block';

export const CATEGORY_CONTENT = 'contents';

export enum ElementType {
  TITLE = 'TITLE',
  SUBTITLE = 'SUBTITLE',
  PARAGRAPH = 'PARAGRAPH',
  BG_COLOR = 'BACKGROUND-COLOR',
  BG_IMAGE = 'BACKGROUND-IMAGE',
  BUTTON = 'BUTTON',
  LINK = 'LINK'
}

export enum SidebarType {
  BACKGROUND = 'BACKGROUND',
  BUTTON = 'BUTTON',
  LINK = 'LINK'
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

export interface BlockEvent {
  block: TemplateBlock;
  param?: Parameter;
}

export interface SidebarEvent {
  type: SidebarType;
  paramName?: string;
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
    this.style = {};
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

export class Link extends Parameter {

  private _link: string;

  constructor(type: ElementType, value: string, link: string) {
    super(type, value);
    this._link = link;
  }

  public get link(): string {
    return this._link;
  }

  public set link(link: string) {
    this._link = link;
  }
}

export class Button extends Link {

  constructor(type: ElementType, value: string, link: string) {
    super(type, value, link);
    this.style = {
      color: '#ffffff',
      backgroundColor: '#528bff',
      borderColor: '#528bff',
      borderStyle: 'solid',
      borderWidth: '1'
    };
  }
}


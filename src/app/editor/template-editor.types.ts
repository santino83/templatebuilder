import {Type} from '@angular/core/src/type';
import {TemplateBlock} from './blocks/template.block';
import {environment} from '../../environments/environment.prod';

export const CATEGORY_CONTENT = 'contents';

export enum ElementType {
  TITLE = 'TITLE',
  SUBTITLE = 'SUBTITLE',
  PARAGRAPH = 'PARAGRAPH',
  BG_COLOR = 'BACKGROUND-COLOR',
  BG_IMAGE = 'BACKGROUND-IMAGE',
  IMAGE = 'IMAGE',
  BUTTON = 'BUTTON',
  LINK = 'LINK'
}

export enum SidebarType {
  BACKGROUND = 'BACKGROUND',
  BUTTON = 'BUTTON',
  IMAGE = 'IMAGE',
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
  style?: {};

  protected constructor(type: ElementType) {
    this.type = type;
    this.style = {};
  }
}

export class Text extends Parameter {

  value: string;

  constructor(type: ElementType, value: string) {
    super(type);
    this.value = value;
  }
}

export class Background extends Parameter {

  value: string;

  constructor(type: ElementType, value: string) {
    super(type);
    this.value = value;
  }
}

export class Image extends Parameter {

  src: string;

  constructor(type: ElementType, src: string) {
    super(type);
    this.src = environment.imgsPath + src;
  }

  public width(width: string): Image {
    this.style['width'] = width;
    return this;
  }

  public height(height: string): Image {
    this.style['height'] = height;
    return this;
  }
}

export class Link extends Parameter {

  text: string;

  link: string;

  constructor(type: ElementType, text: string, link: string) {
    super(type);
    this.text = text;
    this.link = link;
  }
}

export class Button extends Link {

  constructor(type: ElementType, text: string, link: string) {
    super(type, text, link);
    this.style = {
      color: '#ffffff',
      backgroundColor: '#528bff',
      borderColor: '#528bff',
      borderStyle: 'solid',
      borderWidth: '1'
    };
  }
}


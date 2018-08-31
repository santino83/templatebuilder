import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive, HostListener,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {BLOCKS} from '../blocks';
import {Type} from '@angular/core/src/type';
import {TemplateBlock} from '../blocks/template.block';
import {BlockInfo} from '../template-editor.types';

@Directive({
  selector: '[templateBlockRendererDirective]',
  exportAs: 'BRDirective'
})
export class BlockRendererDirective implements OnInit {

  @Input() public info: BlockInfo | null;

  private _isEditing = false;

  private componentRef: ComponentRef<TemplateBlock>;

  public constructor(private cfr: ComponentFactoryResolver,
                     private view: ViewContainerRef) {
  }

  public ngOnInit(): void {

    const bi: { type: Type<TemplateBlock>, info: BlockInfo } = BLOCKS.get(this.info.id);
    const cf = this.cfr.resolveComponentFactory(bi.type);
    this.componentRef = this.view.createComponent(cf);
    if (this.info.params) {
      this.componentRef.instance.setParams(this.info.params);
    }
  }

  public getBlock(): TemplateBlock {
    return this.componentRef.instance;
  }

  public isEditing(): boolean {
    return this._isEditing;
  }
}

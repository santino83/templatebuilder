import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {BLOCKS} from '../blocks';
import {Type} from '@angular/core/src/type';
import {TemplateBlock} from '../blocks/template.block';
import {BlockInfo} from '../template-editor.types';

@Directive({
  selector: '[templateBlockRendererDirective]'
})
export class BlockRendererDirective implements OnInit {

  @Input() public info: BlockInfo | null;
  @Output() public changed: EventEmitter<BlockRendererDirective> = new EventEmitter<BlockRendererDirective>();
  @Output() public editing: EventEmitter<{ directive: BlockRendererDirective, value: boolean }> =
    new EventEmitter<{ directive: BlockRendererDirective, value: boolean }>();

  private _isEditing = false;

  private componentRef: ComponentRef<TemplateBlock>;

  public constructor(private cfr: ComponentFactoryResolver,
                     private view: ViewContainerRef,
                     public eRef: ElementRef) {
  }

  public ngOnInit(): void {

    const bi: { type: Type<TemplateBlock>, info: BlockInfo } = BLOCKS.get(this.info.id);

    const cf = this.cfr.resolveComponentFactory(bi.type);
    this.componentRef = this.view.createComponent(cf);
    if (this.info.params) {
      this.componentRef.instance.setParams(this.info.params);
    }
    this.componentRef.instance.changed.subscribe(() => this.changed.emit(this));
    this.componentRef.instance.editing.subscribe((value) => {
      this._isEditing = value;
      this.editing.emit({directive: this, value});
    });
  }

  public getBlock(): TemplateBlock {
    return this.componentRef.instance;
  }

  public isEditing(): boolean {
    return this._isEditing;
  }

}

import {ComponentFactoryResolver, ComponentRef, HostListener, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {TextEditComponent} from '../../../components/text-edit.component';
import {BlockEvent} from '../../../template-editor.types';
import {EditorService} from '../../../services/editor.service';

export abstract class AbstractDirective implements OnInit {

  @Input() protected input: BlockEvent | BlockEvent;

  protected componentRef: ComponentRef<TextEditComponent>;

  protected toolbar: {};

  protected constructor(protected cfr: ComponentFactoryResolver,
                        protected view: ViewContainerRef,
                        protected renderer: Renderer2,
                        protected editor: EditorService,
                        toolbar: {}) {
    this.toolbar = toolbar;
  }

  @HostListener('dblclick') setBlock() {
    this.editor.select(this.input);
  }

  public ngOnInit(): void {
    const factory = this.cfr.resolveComponentFactory(TextEditComponent);
    this.componentRef = this.view.createComponent(factory);

    this.componentRef.instance.set(this.input, this.toolbar);

    this.renderer.appendChild(
      this.view.element.nativeElement,
      this.componentRef.injector.get(TextEditComponent).eRef.nativeElement
    );
  }

}

import {ComponentFactoryResolver, ComponentRef, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {TextEditComponent} from '../../components/text-edit.component';

export abstract class AbstractEditorDirective implements OnInit {

  @Input() protected param: any;

  protected componentRef: ComponentRef<TextEditComponent>;

  protected toolbar: {};

  protected constructor(protected cfr: ComponentFactoryResolver,
                     protected view: ViewContainerRef,
                     protected renderer: Renderer2,
                     toolbar: {}) {
    this.toolbar = toolbar;
  }

  public ngOnInit(): void {
    const factory = this.cfr.resolveComponentFactory(TextEditComponent);
    this.componentRef = this.view.createComponent(factory);

    this.componentRef.instance.name = this.param.name;
    this.componentRef.instance.value = this.param.object.value;
    this.componentRef.instance.toolbar = this.toolbar;

    this.renderer.appendChild(
      this.view.element.nativeElement,
      this.componentRef.injector.get(TextEditComponent).eRef.nativeElement
    );
  }

}

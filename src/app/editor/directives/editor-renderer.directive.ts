import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive, EventEmitter,
  Input,
  OnInit, Output,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {TextEditComponent} from '../components/text-edit.component';

@Directive({
  selector: ` [
    h1,h2,h3,h4,h5,h6,
    p,a
  `
})
export class EditorRendererDirective implements OnInit {

  @Input() param: any;
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  private componentRef: ComponentRef<TextEditComponent>;

  public constructor(private cfr: ComponentFactoryResolver,
                     private view: ViewContainerRef,
                     private renderer: Renderer2) {
  }

  public ngOnInit(): void {

    const factory = this.cfr.resolveComponentFactory(TextEditComponent);
    this.componentRef = this.view.createComponent(factory);
    this.componentRef.instance.param = this.param;

    this.renderer.appendChild(
      this.view.element.nativeElement,
      this.componentRef.injector.get(TextEditComponent).eRef.nativeElement
    );

    this.componentRef.instance.changed.subscribe(elem => this.changed.emit(elem));
  }
}

import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output, Renderer2,
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

  @Input() public param: any;
  @Output() public changed: EventEmitter<EditorRendererDirective> = new EventEmitter<EditorRendererDirective>();
  @Output() public editing: EventEmitter<{ directive: EditorRendererDirective, value: boolean }> =
    new EventEmitter<{ directive: EditorRendererDirective, value: boolean }>();

  private _isEditing = false;

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

    this.componentRef.instance.changed.subscribe(() => this.changed.emit(this));
    this.componentRef.instance.editing.subscribe((value) => {
      this._isEditing = value;
      this.editing.emit({directive: this, value});
    });
  }

  public isEditing(): boolean {
    return this._isEditing;
  }

}

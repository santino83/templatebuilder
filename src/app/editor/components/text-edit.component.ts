import {Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextEditComponent),
      multi: true
    }
  ],
  selector: 'template-text-edit',
  styles: [
      `
      .ngx-tollbar ::ng-deep .ngx-toolbar-set {
        border-color: #df584e !important;
      }
    `
  ],
  template: `
    <div [ngClass]="{'te-et label': !disabled}" (dblclick)="edit()" *ngIf="!_editing" [innerHTML]="value"></div>
    <div class="form-group" *ngIf="_editing">
      <!--<app-ngx-editor [config]="{ 'placeholder': 'Enter text ...', 'toolbar': _toolbar}" resizer="basic"
                      [(html)]="value"></app-ngx-editor>-->
      <medium-editor [(editorModel)]="value"
                     [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}">
      </medium-editor>
      <input type="hidden" [name]="name" [ngModel]="value"/>
    </div>
  `
})
export class TextEditComponent implements ControlValueAccessor, OnInit {

  /** Input control is disabled **/
  @Input() disabled = false;

  /** Input control name **/
  @Input() name = '';

  /** a value is required when _editing **/
  @Input() required = true;

  /** advise everybody that value has changed **/
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  @Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** We are _editing **/
  public _editing = false;

  /** Callback when the value is changing **/
  public onChange: any = Function.prototype;

  /** Callback when the input is accessed **/
  public onTouched: any = Function.prototype;
  /** value prior to _editing **/
  private preValue = '';

  public constructor(private eRef: ElementRef) {
    this.toolbar = 'basic';
  }

  /** toolbar **/
  public _toolbar: string[][];

  @Input('toolbar')
  set toolbar(type: string) {
    console.log('hello ' + type);
    switch (type.toLocaleLowerCase()) {
      case 'basic':
        this._toolbar = [['bold', 'italic', 'underline', 'strikeThrough']];
        break;
      case 'text':
        this._toolbar = [
          ['bold', 'italic', 'underline', 'strikeThrough'], ['fontSize', 'color'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
          ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList']
        ];
        break;
      case 'full':
        this._toolbar = [
          ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
          ['fontSize', 'color'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
          ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
          ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
          ['link', 'unlink', 'image']
        ];
        break;
    }
  }

  /** private value of input **/
  private _value = '';

  public get value(): any {
    return this._value;
  }

  public set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  @HostListener('document:click', ['$event'])
  public clickout(event) {
    if (this.editing && !this.eRef.nativeElement.contains(event.target)) {
      this.confirm();
    }
  }

  /**
   * finishing _editing, save inserted value
   */
  public confirm() {
    if (this.required && (!this.value || 0 === this.value.trim().length)) {
      return;
    }

    this._editing = false;
    this.editing.emit(false);
    this.changed.emit(this.value);
  }

  /**
   * starts _editing
   */
  public edit() {
    if (this.disabled || this._editing) {
      return;
    }
    this.preValue = this.value;
    this._editing = true;
    this.editing.emit(true);

  }

  /**
   * stop _editing and return to original value
   */
  public cancel() {
    this.value = this.preValue;
    this._editing = false;
    this.editing.emit(false);
  }

  /** INTERFACE IMPLEMENTATIONS **/

  public ngOnInit(): void {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this._editing && this.disabled) {
      this.cancel();
    }
  }

  public writeValue(obj: any): void {
    if (obj !== undefined) {
      this._value = obj;
    }
  }

}

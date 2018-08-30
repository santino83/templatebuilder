/**
 * This is a porting of/inspired from https://github.com/savantly-net/ngx-inline-edit
 */

import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InlineInputEditComponent),
      multi: true
    }
  ],
  selector: 'template-inline-edit',
  styles: [
    `
      

    `
  ],
  template: `

    <div [ngClass]="{'iie label': !disabled}" (dblclick)="edit(value)" *ngIf="!editing" [innerHTML]="value"></div>
    <div class="form-group" *ngIf="editing">
      <label *ngIf="label" for="inlineEditControl">{{ label }}</label>
      <input #inlineEditControl
             [type]="type"
             class="iie form-control form-control-lg"
             id="inlineEditControl"
             [(ngModel)]="value"
             [name]="name"
             [required]="required"
             [placeholder]="placeholder"
             (keypress)="keypress($event)" (focus)="onFocus($event)">
    </div>

  `
})
export class InlineInputEditComponent implements ControlValueAccessor, OnInit {

  /** input control **/
  @ViewChild('inlineEditControl') inlineEditControl: ElementRef;
  /** The control label **/
  @Input() label = '';
  /** Type of input control **/
  @Input() type = 'text';
  /** Input _value required **/
  @Input() required = false;
  /** Input control is disabled **/
  @Input() disabled = false;
  // color of the confirm button
  @Input() confirmColor = 'primary';
  // color of the cancel button
  @Input() cancelColor = 'warn';
  /** Input placeholder **/
  @Input() placeholder = '';
  /** shows/hides buttons **/
  @Input() showButtons = false;

  @Input() name = '';

  @Output() changed: EventEmitter<any> = new EventEmitter();
  /** We are _editing **/
  public editing = false;
  /** Callback when the _value is changing **/
  public onChange: any = Function.prototype;
  /** Callback when the input is accessed **/
  public onTouched: any = Function.prototype;
  /** _value prior to _editing **/
  private preValue = '';

  public constructor(private eRef: ElementRef) {
  }

  /** private _value of input **/
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
    if (this.editing && this.disabled) {
      this.cancel();
    }
  }

  public writeValue(obj: any): void {
    if (obj !== undefined) {
      this._value = obj;
    }
  }

  public cancel($event?: Event) {
    this.value = this.preValue;
    this.editing = false;
  }

  public confirm() {
    if (this.required && !this.value) {
      return;
    }

    this.editing = false;
    this.changed.emit(this.value);
  }

  public keypress($event) {
    if (!this.editing || this.disabled) {
      return;
    }

    switch ($event.keyCode) {
      case 13:
        this.confirm();
        break;
      case 27:
        this.cancel();
        break;
    }
  }

  // Start _editing
  public edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    // Set focus on the input element, but we need to give it one cycle so it is ready
    setTimeout(() => {
      this.inlineEditControl.nativeElement.focus();
      this.inlineEditControl.nativeElement.select();
    });
  }

  public onFocus($event: any) {
    if (this.onTouched) {
      this.onTouched($event);
    }
  }

  @HostListener('document:click', ['$event'])
  public clickout(event) {
    if (this.editing && !this.eRef.nativeElement.contains(event.target)) {
      this.confirm();
    }
  }

}

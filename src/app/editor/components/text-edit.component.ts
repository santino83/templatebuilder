import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-text-edit',
  template: `
      <div class="te-et label" (dblclick)="edit()" *ngIf="!_editing" [innerHTML]="param"></div>
      <div class="form-group" *ngIf="_editing">
        <medium-editor [(editorModel)]="param"
                       [editorOptions]="toolbar">
        </medium-editor>
      </div>
  `
})
export class TextEditComponent {

  @Input() param: string;

  /** advise everybody that value has changed **/
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  @Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  private toolbar = {
    'toolbar': {
      'buttons': [
        'bold', 'italic', 'underline', 'anchor',
        'h1', 'h2', 'h3', 'h4'
      ]}
  };

  /** We are _editing **/
  public _editing = false;

  public constructor(public eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.confirm();
    }
  }

  /**
   * finishing _editing, save inserted value
   */
  public confirm() {
    if (!this.param || 0 === this.param.trim().length) {
      return;
    }

    this._editing = false;
    this.editing.emit(false);
    this.changed.emit(this.param);
  }

  /**
   * starts _editing
   */
  public edit() {
    if (this._editing) {
      return;
    }
    this._editing = true;
    this.editing.emit(true);

  }

  /**
   * stop _editing and return to original value

  public cancel() {
    this.value = this.preValue;
    this._editing = false;
    this.editing.emit(false);
  }
   */

  /** FORM APIS: SERVONO?

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
  */
}

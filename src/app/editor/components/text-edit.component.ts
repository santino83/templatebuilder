import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

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
}

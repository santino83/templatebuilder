import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {EditorService} from '../services/editor.service';

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

  private toolbar = {
    'toolbar': {
      'buttons': [
        'bold', 'italic', 'underline', 'anchor',
        'h1', 'h2', 'h3', 'h4'
      ]}
  };

  private _editing = false;

  public constructor(private editor: EditorService,
                     public eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  private clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.confirm();
    }
  }

  private edit() {
    this._editing = true;
    this.editor.lock();
  }

  private confirm() {
    if (!this.param || 0 === this.param.trim().length) {
      return;
    }

    this._editing = false;
    this.editor.unlock();
    this.changed.emit(this.param);
  }

}

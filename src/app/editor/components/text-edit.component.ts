import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output, Renderer2,
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
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  private _editing = false;

  private toolbar = {
    'toolbar': {
      'buttons': [
        'bold', 'italic', 'underline', 'anchor',
        'h1', 'h2', 'h3', 'h4'
      ]}
  };

  public constructor(private editor: EditorService,
                     public eRef: ElementRef,
                     private renderer: Renderer2) {
  }

  @HostListener('document:click', ['$event'])
  private clickout(event) {
    if (this._editing && !this.eRef.nativeElement.contains(event.target) ) {
      this.confirm();
    }
  }

  private edit() {
    if (this._editing) {
      return;
    }

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

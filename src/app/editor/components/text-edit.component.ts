import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {TemplateBlock} from '../blocks/template.block';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-text-edit',
  template: `
    <div class="te-et label" (dblclick)="onEdit()" *ngIf="!_editing" [innerHTML]="value"></div>
    <div class="form-group" *ngIf="_editing">
      <medium-editor [(editorModel)]="value"
                     [editorOptions]="toolbar">
      </medium-editor>
    </div>
  `
})
export class TextEditComponent implements OnInit{

  public name: string;
  public value: string;

  private blockToEdit: TemplateBlock;

  private _editing = false;


  private toolbar = {
    'toolbar': {
      'buttons': [
        'bold', 'italic', 'underline', 'anchor',
        'h1', 'h2', 'h3', 'h4'
      ]}
  };

  public constructor(private editor: EditorService,
                     public eRef: ElementRef) {
  }

  public ngOnInit() {
    this.editor
        .blockStream$
        .subscribe(block => this.blockToEdit = block);
  }

  @HostListener('document:click', ['$event'])
  private clickout(event) {
    if (this._editing && !this.eRef.nativeElement.contains(event.target) ) {
      this.onConfirm();
    }
  }

  private onEdit() {
    if (this._editing) {
      return;
    }

    this._editing = true;
    this.editor.lock();
  }

  private onConfirm() {
    if (!this.value || 0 === this.value.trim().length) {
      return;
    }

    this._editing = false;
    this.editor.unlock();
    this.blockToEdit.setParam(this.name, this.value);
  }

}

import {Component, ElementRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {BlockEvent, Text} from '../template-editor.types';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-text-edit',
  styles: [`    
    .ql-container, .ql-editor{
    font-size: unset !important;
    padding: unset !important;
    text-align: unset !important;
    white-space: unset !important;
    tab-size: unset !important;
    line-height: unset !important;
    z-index: 9999 !important;
  }
  .ql-editor h1 {
    font-size: 2.75rem !important;
  }
  .ql-editor h2 {
    font-size: 2rem !important;
  }
  .ql-editor h3 {
    font-size: 1.125rem !important;
  }
  .ql-editor h5 {
    font-size: 0.9rem !important;
  }
  .ql-editor h6 {
    font-size: 0.75rem !important;
  }
<<<<<<< HEAD
  .ql-align-right {  /*da rivedere perche l'align di ngx-quill usa queste classi, 
  serve un interprete prima di inviare a backend oppure definire le classi  */
=======
  .ql-align-right {  
>>>>>>> contents-blocks
    text-align: right;
  }
  .ql-align-left {
    text-align: left;
  }
  .ql-align-center {
    text-align: center;
  }
  `],
  template: `
    <div class="te-et label" (dblclick)="onEdit()" *ngIf="!_editing" [innerHTML]="param.value | sanitizeHtml"></div>
    <div class="form-group" *ngIf="_editing">
      
      <quill-editor [(ngModel)]="param.value" [modules]="toolbar" theme="bubble"></quill-editor>
      
    </div>
  `
})
export class TextEditComponent implements OnInit {

  private param: Text;

  private preValue: string;

  private _editing = false;

  public toolbar: {};

  public constructor(private editor: EditorService,
                     public eRef: ElementRef) {}

  public ngOnInit() {
    this.preValue = this.param.value;
  }

  @HostListener('document:click', ['$event'])
  private clickout(event) {
    if (this._editing && !this.eRef.nativeElement.contains(event.target)) {
      this.onConfirm();
    }
  }

  @HostListener('document:keyup', ['$event'])
  private handleEscEvent(event: KeyboardEvent) {
    const key = event.keyCode;
    if (this._editing && key === 27) {
      this.cancel();
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
    if (!this.param || 0 === this.param.value.trim().length) {
      return;
    }

    this.preValue = this.param.value;
    this._editing = false;
    this.editor.unlock();
  }

  private cancel(): void {
    this.param.value = this.preValue;
    this._editing = false;
    this.editor.unlock();
  }

  public set(block: BlockEvent, toolbar: {}) {
    this.param = block.param as Text;
    this.toolbar = toolbar;
  }
}

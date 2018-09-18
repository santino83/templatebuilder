import {Component, ElementRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {EditorService} from '../services/editor.service';
import {TemplateBlock} from '../blocks/template.block';
import {SidebarService} from '../services/sidebar.service';


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
  .ql-align-right {  /*da rivedere perche l'align di ngx-quill usa queste classi, serve un interprete prima di inviare a backend oppure definire le classi  */
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
    <div class="te-et label" (dblclick)="onEdit()" *ngIf="!_editing" [innerHTML]="_value | sanitizeHtml"></div>
    <div class="form-group" *ngIf="_editing">
      
      <quill-editor [(ngModel)]="_value" [modules]="_toolbar" theme="bubble"></quill-editor>
      
    </div>
  `
})
export class TextEditComponent implements OnInit {

  private _toolbar: {};
  private _name: string;
  private _value: string;

  private preValue: string;

  private block: TemplateBlock;

  private _editing = false;

  public constructor(private editor: EditorService,
                     public eRef: ElementRef,
                     private sidebar: SidebarService){
  }

  public ngOnInit() {
    this.preValue = this._value;
    this.editor
      .blockStream
      .subscribe(obj => this.block = obj.block);
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

    this.sidebar.unset();
    this._editing = true;
    this.editor.lock();
  }

  private onConfirm() {
    if (!this._value || 0 === this._value.trim().length) {
      return;
    }

    this.block.setParam(this._name, 'value', this._value);
    this.preValue = this._value;
    this._editing = false;
    this.editor.unlock();
  }

  private cancel(): void {
    this._value = this.preValue;
    this._editing = false;
    this.editor.unlock();
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;
  }

  public get toolbar(): {} {
    return this._toolbar;
  }

  public set toolbar(toolbar: {}) {
    this._toolbar = toolbar;
  }
}

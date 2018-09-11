import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EditorService} from '../../services/editor.service';
import {TemplateBlock} from '../../blocks/template.block';

@Component({
  selector: 'template-image-sidebar',
  template: `
    <button type="button" (click)="onSelect()" pButton icon="pi pi-info-circle" label="Show"></button>
    <br>
    alt
    <input type="text" class="form-control" [(ngModel)]="alt">
    <br>
    align
    <select [(ngModel)]="align">
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>
    <br>
    width
    <input type="text" class="form-control" [(ngModel)]="width">    
    <br>
    height
    <input type="text" class="form-control" [(ngModel)]="height">

    <p-dialog [width]="300" [(visible)]="popup">
      <p-header>
        Header content here
      </p-header>
      Content
      <p-footer>
        //buttons
      </p-footer>
    </p-dialog>
  `
})
export class ImageComponent implements OnInit, OnChanges, DoCheck{

  @Input() name: string;

  private block: TemplateBlock;

  private src: string;

  private alt: string;

  private align: string;

  private width: string;

  private height: string;

  private popup = false;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
      .blockStream$
      .subscribe(obj => {
        this.block = obj.block;
        this.initValues();
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.block && changes.name) {
      this.initValues();
    }
  }

  public ngDoCheck() {
    if (!this.block) { return; }

    this.block.setParam(this.name, 'src', this.src);
    this.block.setParam(this.name, 'alt', this.alt);
    this.block.setParam(this.name, 'align', this.align);

    this.block.setParam(this.name, 'style', {
      width: this.width,
      height: this.height,
    });
  }

  private initValues() {
    this.src = this.block.getParamValue(this.name, 'src');
    this.alt = this.block.getParamValue(this.name, 'alt');
    this.align = this.block.getParamValue(this.name, 'align');
    this.width = this.block.getParamValue(this.name, 'style').width || '';
    this.height = this.block.getParamValue(this.name, 'style').height || '';
  }

  private onSelect() {
    this.popup = true;
  }


}

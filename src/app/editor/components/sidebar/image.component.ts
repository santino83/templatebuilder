import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EditorService} from '../../services/editor.service';
import {TemplateBlock} from '../../blocks/template.block';

@Component({
  selector: 'template-image-sidebar',
  template: `
    <br>
    Width
    <input type="text" class="form-control" [(ngModel)]="width">
    <br>
    Height
    <input type="text" class="form-control" [(ngModel)]="height">
  `
})
export class ImageComponent implements OnInit, OnChanges, DoCheck{

  @Input() name: string;

  private block: TemplateBlock;

  private width: string;
  private height: string;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
      .blockStream$
      .subscribe(obj => {
        this.block = obj.block;
        this.initValues();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.block && changes.name) {
      this.initValues();
    }
  }

  public ngDoCheck() {
    if (!this.block) { return; }

    this.block.setParam(this.name, 'style', {
      width: this.width,
      height: this.height,
    });
  }

  private initValues() {
    this.width = this.block.getParamValue(this.name, 'style').width || '';
    this.height = this.block.getParamValue(this.name, 'style').height || '';
  }


}
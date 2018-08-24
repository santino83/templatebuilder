import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {BlockInfo} from './template-editor.types';
import {EditorService} from './services/editor.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-editor',
  styles: [
      `
      .template-editor-item {
        margin: 10px !important;
        padding: 0px !important;
        border: none !important;
        background: none;
      }

      .template-editor-item:hover {
        border: none;
        box-shadow: 0 0 0 0.4rem rgba(120, 121, 122, 0.5);
      }

      .template-editor .ngx-dnd-container {
        border: none !important;
      }

      .template-editor .ti-tbrd {
        position: relative;
      }

      .ti-tbrd .action-btns {
        position: absolute;
        top: -1px;
        right: 0px;
        z-index: 9999;
      }

      .ti-tbrd .action-btns .btn {
        padding: 0px 5px;
        background: #a4a5a8;
        border: none;
        color: #495060 !important;
        border-radius: 0px;
      }

    `
  ],
  template: `
    <template-menu></template-menu>
    <div class="template-editor">
      <ngx-dnd-container [model]="models"
                         dropZone="builder-target"
                         droppableItemClass="template-editor-item"
                         [removeOnSpill]="false"
                         [moves]="moves">

        <ng-template let-model="model" let-template="template">
          <div class="ti-tbrd" templateBlockRendererDirective [info]="model">
            <div class="action-btns">
              <a (click)="remove(model)" class="btn" title="Remove"><em class="fa fa-trash"></em></a>
            </div>
          </div>
        </ng-template>

      </ngx-dnd-container>
    </div>
  `
})
export class TemplateEditorComponent implements OnInit {

  @ViewChildren(BlockRendererDirective)
  public rendered: QueryList<BlockRendererDirective>;

  public models: BlockInfo[] = [];
  public moves = true;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
        .editing
        .subscribe(val => this.moves = !val);
  }

  public remove(model: BlockInfo) {
    const index = this.models.indexOf(model);
    if (index > -1) {
      this.models.splice(index, 1);
    }

    this.moves = true;
    this.rendered.forEach(item => {
      if (item.isEditing()) {
        this.moves = false;
      }
    });
  }

}

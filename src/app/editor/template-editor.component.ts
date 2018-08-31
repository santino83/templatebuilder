import {Component, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {BlockInfo} from './template-editor.types';
import {EditorService} from './services/editor.service';
import {TemplateBlock} from './blocks/template.block';
import {ObjectUtils} from './deprecated/template-editor.utils';

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

      .btn-blocks {
        border-radius: 0px 2px 2px 0px;
      }

      .btn-layout {
        border-radius: 2px 0px 0px 2px;
        float: right;
        background-color: #a70001;
        border-color: #a70001;
      }

      .btn-layout:hover {
        background-color: #e60001;
        border-color: #e60001;
      }

      .ng-sidebar {
        background-color: whitesmoke;
      }

      .sidebar-container {
        height: 100vh !important;
      }

    `
  ],
  template: `
    <ng-sidebar-container class="sidebar-container">

      <ng-sidebar class="sidebar"
                  [(opened)]="blocks_side"
                  mode="push"
                  position="left">
        <template-menu></template-menu>
      </ng-sidebar>

      <ng-sidebar class="sidebar"
                  [(opened)]="layout_side"
                  mode="push"
                  position="right">
        <template-bg-edit></template-bg-edit>
      </ng-sidebar>
      
      <div ng-sidebar-content>
        <button class="btn btn-blocks" (click)="toggleBlocksSidebar()" title="apri/chiudi pannello">
          <em class="fa fa-bars"></em>
        </button>
        
        <button class="btn btn-layout" *ngIf="layout_side" (click)="toggleLayoutSidebar(false)" title="apri/chiudi layout">
          <em class="fa fa-remove"></em>
        </button>

        <h1 class="text-center">Trascina i blocchi qui sotto</h1>
        <div class="template-editor">
          <ngx-dnd-container [model]="models" 
                             dropZone="builder-target"
                             droppableItemClass="template-editor-item"
                             [removeOnSpill]="false"
                             [moves]="moves">

          <ng-template let-model="model" let-template="template">
            <div class="ti-tbrd" templateBlockRendererDirective #BRD="BRDirective" [info]="model">
              <div class="action-btns">
                <a (click)="changeBg(BRD.getBlock())" class="btn" title="Change Background"><em class="fa fa-edit"></em></a>
                <a (click)="duplicate(BRD.getBlock(), model)" class="btn" title="Duplicate"><em class="fa fa-copy"></em></a>
                <a (click)="remove(model)" class="btn" title="Remove"><em class="fa fa-trash"></em></a>
              </div>
            </div>
          </ng-template>
            
          </ngx-dnd-container>
        </div>
      </div>
    </ng-sidebar-container>
  `
})
export class TemplateEditorComponent implements OnInit {

  @ViewChildren(BlockRendererDirective)
  private rendered: QueryList<BlockRendererDirective>;

  private blocks_side = true;
  private layout_side = false;
  private models: BlockInfo[] = [];
  private moves = true;

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
        .editing$
        .subscribe(val => {
          this.moves = !val;
        });
  }

  private toggleBlocksSidebar() {
    this.blocks_side = !this.blocks_side;
  }

  private toggleLayoutSidebar(value: boolean) {
    this.layout_side = value;
  }

<<<<<<< HEAD
  private changeBg(block: TemplateBlock) {
    this.layoutService.setBlock(block);
=======
  public duplicate(blockToDuplicate: TemplateBlock, model: BlockInfo) {
    const start = this.models.indexOf(model) + 1;
    const info: BlockInfo = ObjectUtils.deepClone(blockToDuplicate.info);
    info.params = blockToDuplicate.getParams();
    this.models.splice(start, 0, info);
  }

  public changeBg(block: TemplateBlock) {
    this.editor.setBlock(block);
>>>>>>> all-in-one
    this.toggleLayoutSidebar(true);
  }

  private remove(model: BlockInfo) {
    this.toggleLayoutSidebar(false);
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

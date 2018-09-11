import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {BlockInfo, SidebarType} from './template-editor.types';
import {EditorService} from './services/editor.service';
import {TemplateBlock} from './blocks/template.block';
import {ObjectUtils} from './deprecated/template-editor.utils';
import {SidebarService} from './services/sidebar.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-editor',
  styleUrls: ['./template-editor.component.css'],
  template: `    
    <ng-sidebar-container class="sidebar-container">
      <ng-sidebar class="sidebar"
                  [(opened)]="blocks_side"
                  mode="push"
                  position="left">
        <template-menu></template-menu>
      </ng-sidebar>

      <ng-sidebar class="sidebar"
                  [(opened)]="sidebarSelected"
                  mode="push"
                  position="right">
        <template-sidebar></template-sidebar>
      </ng-sidebar>
      <div ng-sidebar-content>
        <button class="btn btn-blocks" (click)="toggleBlocksSidebar()" title="apri/chiudi pannello">
          <em class="fa fa-bars"></em>
        </button>

        <button class="btn btn-layout" *ngIf="sidebarSelected" (click)="sidebar.unset()" title="chiudi pannello">
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
                  <a (click)="editBackground(BRD.getBlock())" class="btn" title="Change Background"><em class="fa fa-edit"></em></a>
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
  private models: BlockInfo[] = [];
  private moves = true;

  private sidebarSelected = false;

  public constructor(private editor: EditorService,
                     private sidebar: SidebarService) {}

  public ngOnInit() {
    this.editor
        .editing$
        .subscribe(val => this.moves = !val);

    this.sidebar
        .selected$
        .subscribe((obj) => this.sidebarSelected = obj.type !== undefined);
  }

  private toggleBlocksSidebar() {
    this.blocks_side = !this.blocks_side;
  }

  public duplicate(blockToDuplicate: TemplateBlock, model: BlockInfo) {
    const start = this.models.indexOf(model) + 1;
    const info: BlockInfo = ObjectUtils.deepClone(blockToDuplicate.info);
    info.params = ObjectUtils.deepClone(blockToDuplicate.getParams());
    this.models.splice(start, 0, info);
  }

  public editBackground(block: TemplateBlock) {
    this.editor.set(block);
    this.sidebar.set(SidebarType.BACKGROUND);
  }

  private remove(model: BlockInfo) {
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

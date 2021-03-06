import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {BlockEvent, BlockInfo, SidebarType} from './template-editor.types';
import {EditorService} from './services/editor.service';
import {TemplateBlock} from './blocks/template.block';
import {Utils} from './shared/utils';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'template-editor',
  styleUrls: ['./template-editor.component.css'],
  template: `    
    <ng-sidebar-container class="sidebar-container" style="z-index: 0;">
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

        <button class="btn btn-layout" *ngIf="sidebarSelected" (click)="sidebarSelected = false" title="chiudi pannello">
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
                  <a (click)="editBackground(BRD.getBlock())" class="btn-action" title="Change color "><em class="fa fa-edit"></em></a>
                  <a (click)="duplicate(BRD.getBlock(), model)" class="btn-action" title="Duplicate"><em class="fa fa-copy"></em></a>
                  <a (click)="remove(model)" class="btn-action" title="Remove"><em class="fa fa-trash"></em></a>
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

  public constructor(private editor: EditorService) {}

  public ngOnInit() {
    this.editor
        .editing
        .subscribe(val => this.moves = !val);

    this.editor
        .blockStream
        .subscribe((event: BlockEvent) => {
          this.sidebarSelected = event.sidebar !== undefined;
        });
  }

  public duplicate(blockToDuplicate: TemplateBlock, model: BlockInfo) {
    const start = this.models.indexOf(model) + 1;
    const info: BlockInfo = Utils.clone(blockToDuplicate.info);
    info.params = Utils.clone(blockToDuplicate.getParams());
    this.models.splice(start, 0, info);
  }

  public toggleBlocksSidebar() {
    this.blocks_side = !this.blocks_side;
  }

  public editBackground(block: TemplateBlock) {
    this.editor.select({block: block, sidebar: SidebarType.BACKGROUND} as BlockEvent);
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

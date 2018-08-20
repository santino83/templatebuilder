import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {Content01Block} from './blocks/contents/content-01.block';
import {BlockRendererDirective} from './directives/block-renderer.directive';
import {BlockInfo} from './template-editor.types';

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
                         [moves]="moves"
                         (drag)="log($event)"
                         (drop)="onDrop($event)"
                         (over)="log($event)"
                         (out)="log($event)"
                         (remove)="log($event)">

        <ng-template let-model="model" let-template="template">
          <div class="ti-tbrd" templateBlockRendererDirective (editing)="onEdit($event)" [info]="model">
            <div class="action-btns">
              <a (click)="remove(model)" class="btn" title="Remove"><em class="fa fa-trash"></em></a>
            </div>
          </div>
        </ng-template>

      </ngx-dnd-container>
    </div>
    <a (click)="test()" class="btn btn-default">test</a>
  `
})
export class TemplateEditorComponent implements OnInit, AfterViewInit {

  @ViewChildren(BlockRendererDirective) public rendered: QueryList<BlockRendererDirective>;

  public models: BlockInfo[] = [];
  public moves = true;

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.rendered.changes.subscribe(() => {
      this.rendered.forEach((directive) => {
        const sub = directive.changed.subscribe((dir) => {
          console.log(dir.getBlock().getInfo());
          sub.unsubscribe();
        });
      });
    });
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

  public onEdit($event: { directive: BlockRendererDirective, value: boolean }) {
    this.moves = !$event.value;
  }

  public onDrop(e: any) {
  }

  public log(e: any) {

  }

  public test() {
    const info: BlockInfo = {
      id: Content01Block.ID,
      name: Content01Block.NAME,
      params: {title: 'Title From Test'},
      metadata: {}
    };
    this.models.push(info);
  }

}

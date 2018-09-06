import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {SidebarType} from '../../template-editor.types';
import {SidebarService} from '../../services/sidebar.service';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: 'img'
})
export class ImageDirective implements OnChanges {

  @Input() protected param: any;

  @HostListener('dblclick') setElement() {
    this.sidebar.set(SidebarType.IMAGE);
  }

  public constructor(private eRef: ElementRef,
                     private editor: EditorService,
                     private sidebar: SidebarService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.param && changes.param ) {
      for (const prop of Object.keys(this.param.object.style)) {
        this.eRef.nativeElement.style[prop] = this.param.object.style[prop];
      }

    }
  }

}

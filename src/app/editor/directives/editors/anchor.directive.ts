import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {SidebarType} from '../../template-editor.types';
import {SidebarService} from '../../services/sidebar.service';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: 'a'
})
export class AnchorDirective implements OnChanges {

  @Input() protected param: any;

  @HostListener('dblclick') setElement() {
    this.param.object.type === SidebarType.BUTTON ?
      this.sidebar.set(SidebarType.BUTTON, this.param.name)
      :
      this.sidebar.set(SidebarType.LINK, this.param.name);
  }

  public constructor(private eRef: ElementRef,
                     private editor: EditorService,
                     private sidebar: SidebarService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.param && changes.param ) {

      this.eRef.nativeElement.innerHTML = this.param.object.text;
      this.eRef.nativeElement.href = this.param.object.link;

      for (const prop of Object.keys(this.param.object.style)) {
        this.eRef.nativeElement.style[prop] = this.param.object.style[prop];
      }

      /* porcata da levare */
      this.eRef.nativeElement.style.borderWidth = this.param.object.style.borderWidth + 'px';
    }
  }

}

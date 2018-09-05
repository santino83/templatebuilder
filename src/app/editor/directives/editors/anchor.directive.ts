import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
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

  public constructor(private elRef: ElementRef,
                     private editor: EditorService,
                     private sidebar: SidebarService) {}


  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.param && changes.param ) {

      this.elRef.nativeElement.innerHTML = this.param.object.value;
      this.elRef.nativeElement.href = this.param.object.link;

      for (const prop of Object.keys(this.param.object.style)) {
        this.elRef.nativeElement.style[prop] = this.param.object.style[prop];
      }

      /* porcata da levare */
      this.elRef.nativeElement.style.borderWidth = this.param.object.style.borderWidth + 'px';
    }
  }

}

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
    this.sidebar.set(SidebarType.BUTTON, this.param.name);
  }

  public constructor(private elRef: ElementRef,
                     private editor: EditorService,
                     private sidebar: SidebarService) {}


  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.param && changes.param ) {
      this.elRef.nativeElement.innerHTML = this.param.object.value;
      this.elRef.nativeElement.href = this.param.object.link;

      /** needing better code for doing this */
      this.elRef.nativeElement.style =
      'color:' + this.param.object.style.color + ';' +
      'background-color:' + this.param.object.style.bgColor + ';' +
      'border-color:' + this.param.object.style.borderColor + ';' +
      'border-style:' + this.param.object.style.borderStyle + ';' +
      'border-width:' + this.param.object.style.borderWidth + 'px;';
    }
  }

}

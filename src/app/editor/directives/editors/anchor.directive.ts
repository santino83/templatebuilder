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
    console.log(this.param.object);
    this.param.object.type === 'button' ?
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

      this.elRef.nativeElement.style.color = this.param.object.style.color;
      this.elRef.nativeElement.style.backgroundColor = this.param.object.style.bgColor;

      if ( this.param.object.type = 'button') {
        this.elRef.nativeElement.style.borderColor = this.param.object.style.borderColor;
        this.elRef.nativeElement.style.borderStyle = this.param.object.style.borderStyle;
        this.elRef.nativeElement.style.borderWidth = this.param.object.style.borderWidth + 'px';
      }
    }
  }

}

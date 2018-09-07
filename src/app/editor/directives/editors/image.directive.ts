import {Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {SidebarType} from '../../template-editor.types';
import {SidebarService} from '../../services/sidebar.service';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: 'img'
})
export class ImageDirective implements OnChanges {

  @Input() protected param: any;

  @HostListener('dblclick') setElement() {
    this.sidebar.set(SidebarType.IMAGE, this.param.name);
  }

  public constructor(private eRef: ElementRef,
                     private editor: EditorService,
                     private sidebar: SidebarService,
                     private renderer: Renderer2) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.param && changes.param ) {

      this.renderer.setAttribute(this.eRef.nativeElement, 'src', this.param.object.src);
      this.renderer.addClass(this.eRef.nativeElement, 'te-et');
      this.renderer.addClass(this.eRef.nativeElement, 'label');

      this.eRef.nativeElement.style.width = this.param.object.style.width + 'px';
      this.eRef.nativeElement.style.height = this.param.object.style.height + 'px';

    }
  }

}

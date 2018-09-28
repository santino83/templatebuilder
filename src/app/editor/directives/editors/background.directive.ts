import {Directive, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TemplateBlock} from '../../blocks/template.block';
import {Background, BlockEvent} from '../../template-editor.types';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: ` [
    section, footer
   ]
  `
})
export class BackgroundDirective implements DoCheck {

  private block: TemplateBlock;

  private bgColor: Background;

  private bgImage: Background;

  public constructor(private editor: EditorService,
                     private eRef: ElementRef) {
  }


  ngDoCheck(): void {
    if (!this.block) return;
    this.eRef.nativeElement.style.backgroundColor = this.bgColor.value;
    this.eRef.nativeElement.style.backgroundImage = 'url(' + this.bgImage.value + ')';
  }

  public setBlock(block: TemplateBlock) {
    this.block = block;
    this.bgColor = this.block.getParam('backgroundColor') as Background;
    this.bgImage = this.block.getParam('backgroundImage') as Background;
    this.ngDoCheck();
  }
}

import {Directive, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TemplateBlock} from '../../blocks/template.block';
import {Background, BlockEvent} from '../../template-editor.types';
import {EditorService} from '../../services/editor.service';

@Directive({
  selector: 'section'
})
export class BackgroundDirective implements OnInit, OnChanges {

  private block: TemplateBlock;

  private bgColor: Background;

  private bgImage: Background;

  public constructor(private editor: EditorService,
                     private eRef: ElementRef) {}

  public ngOnInit(): void {
    this.editor
      .blockStream
      .subscribe((event: BlockEvent) => {
        this.block = event.block;
        this.bgColor = this.block.getParam('backgroundColor') as Background;
        this.bgImage = this.block.getParam('backgroundImage') as Background;
      });
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.bgColor) {
      this.eRef.nativeElement.style.backgroundColor = this.bgColor.value;
    }else if (changes.bgImage) {
      this.eRef.nativeElement.style.backgroundImage = 'url(' + this.bgImage.value + ')';
    }
  }
}

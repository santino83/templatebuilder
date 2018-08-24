import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  template: `    
    <template-editor></template-editor>
  `
})
export class AppComponent {
  title = 'app';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-glue',
  template: `<DIV  class="glue" ><ng-content></ng-content></DIV>`,
})
export class GlueComponent  { name = 'Angular'; }

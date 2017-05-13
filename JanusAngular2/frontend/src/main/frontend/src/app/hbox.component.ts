import { Component } from '@angular/core';

@Component({
  selector: 'app-hbox',
  template: `<DIV  class="hbox" ><ng-content></ng-content></DIV>`,
})
export class HBoxComponent  { name = 'Angular'; }

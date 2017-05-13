import { Component } from '@angular/core';

@Component({
  selector: 'app-vbox',
  template: `<DIV  class="vbox margin10 no-margin-right no-margin-left" ><ng-content></ng-content></DIV>`,
})
export class VBoxComponent  { name = 'Angular'; }

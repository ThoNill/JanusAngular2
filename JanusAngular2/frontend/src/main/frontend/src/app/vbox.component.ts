import { Component } from '@angular/core';

@Component({
  selector: 'VBOX',
  template: "<DIV  class='vbox margin10 no-margin-right no-margin-left' ><DIV><ng-content></ng-content></DIV></DIV>",
})
export class VBoxComponent  { name = 'Angular'; }

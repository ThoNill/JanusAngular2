import { Component } from '@angular/core';

@Component({
  selector: 'app-vbox',
  template: "<DIV  class='vbox margin10 no-margin-right no-margin-left' ><DIV><ng-content></ng-content></DIV></DIV>",
})
export class VBoxComponent  { name = 'Angular'; }

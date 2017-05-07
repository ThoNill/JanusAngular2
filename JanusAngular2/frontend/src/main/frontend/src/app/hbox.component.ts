import { Component } from '@angular/core';

@Component({
  selector: 'HBOX',
  template: "<DIV  class=' hbox ' ><DIV><ng-content></ng-content></DIV></DIV>",
})
export class HBoxComponent  { name = 'Angular'; }

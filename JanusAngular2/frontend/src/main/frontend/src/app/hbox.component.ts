import { Component } from '@angular/core';

@Component({
  selector: 'app-hbox',
  template: "<DIV  class=' hbox ' ><DIV><ng-content></ng-content></DIV></DIV>",
})
export class HBoxComponent  { name = 'Angular'; }

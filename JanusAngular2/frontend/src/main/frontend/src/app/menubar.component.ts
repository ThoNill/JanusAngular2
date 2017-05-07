import { Component } from '@angular/core';

@Component({
  selector: 'MENUBAR',
  template: "<nav class='app-bar' ><ul class='app-bar-menu'><ng-content></ng-content></ul></nav>",
})
export class MenubarComponent  {  }

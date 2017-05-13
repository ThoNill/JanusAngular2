import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  template: "<nav class='app-bar' ><ul class='app-bar-menu'><ng-content></ng-content></ul></nav>",
})
export class MenubarComponent  {  }

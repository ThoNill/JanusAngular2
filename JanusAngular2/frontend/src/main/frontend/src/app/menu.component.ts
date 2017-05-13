import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: "<li  class='cmenu'  style='{{styleOut}}'  ><a href='' class='dropdown-toggle' >{{title}}</a><ul  class='d-menu' data-role='dropdown'><ng-content></ng-content></ul></li>",
})
export class MenuComponent  { 
   @Input() styleOut = '';
   
   @Input() title = '';
   
    
}

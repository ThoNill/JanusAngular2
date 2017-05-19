import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';


@Component({
  selector: 'app-menuitem',
  template: `<li   style='{{styleOut}}' ><a href='#' (click)="followLink()" >{{title}}</a></li>`,
})

export class MenuitemComponent  { 
   @Input() styleOut = '';
   
   @Input() title = ''; 
   
   @Input() model = '';
   
   wurzel : AppComponent;
    
   constructor(   w: AppComponent) {
    this.wurzel = w;
   }
   
   followLink() {
      this.wurzel.performCommand(this.model);
   	  return false;
   }
}

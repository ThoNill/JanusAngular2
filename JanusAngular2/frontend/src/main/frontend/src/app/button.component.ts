import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';

@Component({
  selector: 'app-button',
  template: `<div class='margin10 no-margin-right' style='{{styleOut}}' ><button  (click)="followLink($events)"  >{{title}}</button></div>` 
})
export class ButtonComponent  { 
   @Input() styleOut = '';
   
   @Input() title = ''; 
   
   @Input() model = '';
   
   wurzel : AppComponent;
    
   constructor(w: AppComponent) {
    this.wurzel = w;
   }
   
   followLink(event : any) {
      this.wurzel.performCommand(this.model);
      event.preventDefault();
   }
}

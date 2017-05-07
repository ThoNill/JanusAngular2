import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl : "start.html",
})

export class AppComponent  { 
 name = 'Angular'; 
 title = "Die Anwendung ist gestartet!";
 username ="kein Name";
 ort = "ort";
 objectId : number = 0;
 
 performCommand(command : String) {
     alert(command);
 }
 
 neueId() : number {
   this.objectId++;
   return this.objectId;
 }
 
}

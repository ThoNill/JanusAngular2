import { Component } from '@angular/core';
import { RouterModule, Router }  from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl : "./pages/start.html",
})

export class AppComponent  { 
 name = 'Angular'; 
 title = "Die Anwendung ist gestartet!";
 username ="kein Name";
 ort = "ort";
 objectId : number = 0;

 router: Router;

 constructor( r : Router) {
     this.router = r;
      this.router.navigate(['/menuAuswahl']);
 }
 
 performCommand(command : String) {
   //  alert(command);
      this.router.navigate(['/' + command]);
 }
 
 neueId() : number {
   this.objectId++;
   return this.objectId;
 }
 
}

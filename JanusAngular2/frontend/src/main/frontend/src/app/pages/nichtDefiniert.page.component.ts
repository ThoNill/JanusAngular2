import { Component } from '@angular/core';

@Component({
  selector: 'page-nichtDefiniert',
  templateUrl : "nichtDefiniert.html",
})

export class NichtDefiniertPageComponent  { 
 name = 'tabs'; 
 
 
 performCommand(command : String) {
     alert(command);
 }
 
 
}

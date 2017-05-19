import { Component } from '@angular/core';

@Component({
  selector: 'page-maptable',
  templateUrl : "maptablePage.html",
})

export class MaptablePageComponent  { 
 name = 'maptablePage'; 
 
 
 performCommand(command : String) {
     alert(command);
 }
 
 
}

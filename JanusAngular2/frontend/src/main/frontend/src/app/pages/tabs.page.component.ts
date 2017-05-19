import { Component } from '@angular/core';

@Component({
  selector: 'page-tab',
  templateUrl : "tabs.html",
})

export class TabsPageComponent  { 
 name = 'tabs'; 
 
 
 performCommand(command : String) {
     alert(command);
 }
 
 
}

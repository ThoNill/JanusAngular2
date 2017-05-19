import { Component } from '@angular/core';

@Component({
  selector: 'page-tabellen',
  templateUrl : "tabellen.html",
})

export class TabellenPageComponent  { 
 name = 'tabellenPage'; 
 
 
 performCommand(command : String) {
     alert(command);
 }
 
 
}

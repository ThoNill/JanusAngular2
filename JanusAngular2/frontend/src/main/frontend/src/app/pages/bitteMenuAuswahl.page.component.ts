import { Component } from '@angular/core';

@Component({
  selector: 'page-bitteMenuAuswahl',
  templateUrl : "bitteMenuAuswahl.html",
})

export class BitteMenuAuswahlPageComponent  { 
 name = 'tabs'; 
 
 
 performCommand(command : String) {
     alert(command);
 }
 
 
}

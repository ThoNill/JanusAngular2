import { Component } from '@angular/core';

@Component({
  selector: 'page-textfield',
  templateUrl : "textfield.html",
})

export class TextfieldPageComponent  { 
 name = 'tabs'; 
 
 
 performCommand(command : String) {
     alert(command);
 }
 
 
}

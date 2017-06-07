import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TextFieldComponent} from './textfield.component';
import { DialogComponent }  from './dialog.component';


@Component({
  selector: 'app-datefield',
  template: `<div  class='input-control text margin10 no-margin-right ' data-role='datepicker' data-format='dd.mm.yyyy'>
               <input type='text' id='{{model}}' name='{{model}}' value='{{value|async}}'   
               #box (keyup.enter)="update(box.value)" (blur)="update(box.value)"   > 
               </div> `,
})

export class DateFieldComponent extends TextFieldComponent {

  constructor(w: DialogComponent) { 
    super(w) 
  }

}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TextFieldComponent} from './textfield.component';
import { DialogComponent }  from './dialog.component';


@Component({
  selector: 'app-password',
  template: `<div  class='input-control text  margin10 no-margin-right ' >
               <input  id='{{model}}'  class='input-control password ' type='password' name='{{model}}' value='{{value|async}}'   
               #box (keyup.enter)="update(box.value)" (blur)="update(box.value)"   > 
               </div> `,
})

export class PasswordComponent extends TextFieldComponent {

  constructor(w: DialogComponent) { 
    super(w) 
  }

}

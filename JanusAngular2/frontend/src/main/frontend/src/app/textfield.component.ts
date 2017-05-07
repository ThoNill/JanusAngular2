import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';

@Component({
  selector: 'TEXTFIELD',
  template: `<div  class='input-control text  margin10 no-margin-right ' >
               <input type='text' id='{{model}}' name='{{model}}' value='{{value}}'   
               #box (keyup.enter)="update(box.value)" (blur)="update(box.value)"   > 
               </div> `,
})

export class TextFieldComponent implements OnInit { 

  @Input() model = "nn"; 
  
  value = "";
  wurzel : AppComponent;
  
    constructor(w: AppComponent) {
    this.wurzel = w;
  }
  
  ngOnInit(){
    this.value = this.wurzel[this.model];
  }
  
  update(value: string) { 
     this.value = value;
     this.wurzel[this.model] = value;
  }
  
 }

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { StringComponent} from './string.component';
import { DialogComponent }  from './dialog.component';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observer} from 'rxjs/Observer';
import  'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-textfield',
  template: `<div  class='input-control text  margin10 no-margin-right ' >
               <input type='text' id='{{model}}' name='{{model}}' value='{{value|async}}'   
               #box (keyup.enter)="update(box.value)" (blur)="update(box.value)"   > 
               </div> `,
})

export class TextFieldComponent implements OnInit {

  @Input() model = 'nn'
  
  public value : Observable<string>;
  wurzel: DialogComponent
  
  constructor(w: DialogComponent) { 
    this.wurzel = w 
  }

  ngOnInit() {
    this.value = this.wurzel.getReferenz(this.model).value;
  }

  update(value: string) {
     this.wurzel.getReferenz(this.model).update(value);
  }

 }

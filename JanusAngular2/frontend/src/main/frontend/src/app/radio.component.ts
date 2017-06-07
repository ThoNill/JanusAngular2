import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';
import { DialogComponent }  from './dialog.component';
import { TableItem }  from './TableItem';
import { MaptableComponent }  from './maptable.component';
import { TableViewBasis }  from './TableViewBasis';



@Component({
  selector: 'app-radio',
  template: ` <div id="this.getComponentId()" >
  <label *ngFor="let item of this.children|async; let row = index"  class='input-control radio small-check'   ><input type='radio' name='{{name}}' (click)="this.setCurrentPosition(row)" checked='{{this.marke(item)}}' value='{{row}}'/> <span class='check'></span><span class='caption'>{{item.text}}</span></label>
             </div>`,
})

export class RadioComponent   extends TableViewBasis { 
  
  constructor(w: DialogComponent) {
    super(w);
  }
 
  marke( item:TableItem ) : string {
   return (item.selected) ? "checked" : "";
  }
    
  
   
 }

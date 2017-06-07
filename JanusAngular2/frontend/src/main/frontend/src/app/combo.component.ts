import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';
import { DialogComponent }  from './dialog.component';
import { TableItem }  from './TableItem';
import { MaptableComponent }  from './maptable.component';
import { TableViewBasis }  from './TableViewBasis';

@Component({
  selector: 'app-combo',
  template: `<div id="this.getComponentId()"  class='input-control select'>
                 <select name='{{name}}'  #sel (change)="this.setCurrentPosition(sel.value)" > 
                   <option *ngFor="let item of this.children|async; let rowIndex = index; "  (change)="this.setCurrentPosition(rowIndex)" value='{{rowIndex}}' selected='{{this.marke(item)}}' >{{item.text}} </option>
                 </select> </div>
               `,
 // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ComboComponent  extends TableViewBasis { 
  
  constructor(w: DialogComponent) {
    super(w);
  }

  marke( item: TableItem) : string {
   return (item.selected) ? "selected" : "";
  }
  
  
 }

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';
import { TableItem }  from './TableItem';
import { MaptableComponent }  from './maptable.component';
import { TableViewBasis }  from './TableViewBasis';


@Component({
  selector: 'app-list',
  template: ` <div   id="this.getComponentId()" class='listview set-border'   >
                  <div class='list' *ngFor="let item of this.children|async; let rowIndex = index;" (dblclick)="this.setCurrentPosition(rowIndex)" ><span  class='{{this.marke(item)}}'>{{item.text}}</span></div>
             </div>`,
})

export class ListComponent extends TableViewBasis { 
  
  constructor(w: AppComponent) {
    super(w);
  }
 
  marke( item : TableItem ) : string {
    return (item.selected) ? "list block-shadow-info" : "list-title";
  }
 
 }

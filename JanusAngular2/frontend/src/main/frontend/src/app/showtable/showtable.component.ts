import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AbfrageService }  from '../abfrage.service';
import {Observable} from 'rxjs/Rx';
import { ColumnComponent } from '../column/column.component';
import { AppComponent } from '../app.component';
import { MutableComponent } from '../mutable/mutable.component';
import { TableViewBasis }  from '../TableViewBasis';
import { TableItem }  from '../TableItem';

@Component({
  selector: 'SHOWTABLE',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})

export class ShowtableComponent extends TableViewBasis {

  private listOfColumns : ColumnComponent[] = [];
 // currentPosition = 0;
 // wurzel : AppComponent;

  constructor(w : AppComponent) {
  	super(w);
  }
  
    
  addColumn(column : ColumnComponent) {
    this.listOfColumns.push(column);
  }

  wert(row : Object,name : string) : String {
     return ""+row[name]+"";
  }
  
  marke( item: TableItem) : string {
   return (item.selected) ? "selected" : "";
  }
  
  
  /*
  setCurrentPosition( index:number ) {
  	this.currentPosition = index;
  	this.getModel().setCurrentPosition(index);
  }
  
  isSelected( index:number ) {
  	if (this.currentPosition == index) {
  		return "selected";
  	};
  	return "";
  }
  
  getCurrentObject() : Object {
  	return this.getModel().getCurrentObject()
  }
  
  getModel()  : MutableComponent {
   	return this.wurzel[this.model];
  }
  
  ngOnInit() {
  
  }
  */
}

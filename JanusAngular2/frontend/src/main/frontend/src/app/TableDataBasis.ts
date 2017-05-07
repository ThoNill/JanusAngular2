import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';
import { TableItem }  from './TableItem';
import { TableColumnDescription}  from './TableColumnDescription';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observer} from 'rxjs/Observer';
import  'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import { MucolumnComponent } from './mucolumn/mucolumn.component';




export class TableDataBasis implements OnInit { 

  @Input() name = ""; 
  protected wurzel : AppComponent;
 
  private listOfColumns : TableColumnDescription[] = [];
  
  private bsCurrentPosition : BehaviorSubject<number>;
  public currentPosition : Observable<number>;
 
  private bsRowCount : BehaviorSubject<number>;
  public rowCount : Observable<number>;
  
  private bsChildren : BehaviorSubject<TableItem[]> ;
  public children : Observable<TableItem[]>;
  
  
  constructor(w: AppComponent) {
    this.wurzel = w;
    
    this.bsCurrentPosition = new BehaviorSubject(0);
    this.currentPosition = this.bsCurrentPosition.asObservable()
 
    this.bsRowCount = new BehaviorSubject(0);
    this.rowCount = this.bsRowCount.asObservable()
 
    
    this.bsChildren = new BehaviorSubject([]);
    this.children = this.bsChildren.asObservable()
  }
  
  addColumnDescription(column : TableColumnDescription) {
    this.listOfColumns.push(column);
    console.log("Hinzufügenvon " + column.name);
    this.ergaenzeColumnsUmBeobachter()
  }
  
  
  setCurrentPosition( index:number ) {
  	var altesArray : TableItem[] = this.bsChildren.getValue();
  	var arrayCopy : TableItem[] = [];
  	var i : number = 0;
  	for (let alt of altesArray) {
         var neu : TableItem = alt;
         var selectIt = (i == index) 
         if (alt.selected != selectIt) {
            	neu = Object.create(alt) as TableItem
            	neu.selected = selectIt
            	//console.log("selected[" + i + "] = " + selectIt)
         }         
         i++;
  	     arrayCopy.push(neu); 
  	} 
  	this.bsCurrentPosition.next(index);
  	this.bsRowCount.next(arrayCopy.length);
  	this.bsChildren.next(arrayCopy );
  	this.nextForColumns();
  }
  
  nextForColumns() {
   var row : any = this.getCurrentObject();
   console.log("RoW: " + row);
   for (let column of this.listOfColumns) {
            if (column.bs) {
            console.log("Wert: " + row[column.name]);
            	column.bs.next(row[column.name]);
            }
   }
  }
  
  
  getCurrentPosition() : number {
  	return this.bsCurrentPosition.getValue();
  }
  
  isSelected( index:number ) : boolean {
  	return this.bsCurrentPosition.getValue() == index;
  }

  getCurrentObject() : any {
    if (this.bsChildren.getValue().length == 0) {
       return {};
    } else {
  	   return (this.bsChildren.getValue())[this.getCurrentPosition()];
  	}
  }
  
  addArrayOfTableItems( eArray : TableItem[]) {
      this.bsChildren.next( eArray)
      this.setCurrentPosition(0);
      this.bsRowCount.next(eArray.length);
      this.nextForColumns();
  }
  
  addTableItem ( item : TableItem) {
     this.bsChildren.getValue().push(item);
     this.bsRowCount.next(this.bsChildren.getValue().length);
  }

  publishChanges() {
      this.addArrayOfTableItems(this.bsChildren.getValue())
      this.nextForColumns()
  }

  ergaenzeColumnsUmBeobachter() {
  for (let column of this.listOfColumns) {
       console.log("Prüfe Column " + column.name);
       if (!column.bs) {
            console.log("Oberver fehlt noch");
            column.bs =  new BehaviorSubject("");
    		column.obs  =  column.bs.asObservable();
    		this[column.name] = column.obs;
            console.log("Erzeuge Observable für " + column.name);
       }
    }
  }
  
  ngOnInit(){
    this.wurzel[this.name] = this;
    this.publishChanges();
  }
  
  subscribeToTable( o : Observer<TableItem[]>) {
  	this.children.subscribe(o); 
  }  
  
 }

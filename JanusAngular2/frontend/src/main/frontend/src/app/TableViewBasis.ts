import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { DialogComponent }  from './dialog.component';
import { TableItem }  from './TableItem';
import { TableDataBasis }  from './TableDataBasis';
import {Observer} from 'rxjs/Observer';
import  'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class TableViewBasis  implements OnInit { 

  @Input('model') name = ""; 
  model : TableDataBasis;
  wurzel : DialogComponent;
  objectId : number;

  children : Observable<TableItem[]>;
  
  constructor(w: DialogComponent) {
    this.wurzel = w;
    this.objectId = w.neueId();
  }
  
  getComponentId() : string{
    return this.name + ":" + this.objectId;
  }
  
  isSelected( index:number ) : boolean {
  	return this.model.isSelected(index);
  }
 
  getCurrentObject() : TableItem {
  	return this.model.getCurrentObject()
  }
 
   
  ngOnInit(){
  	this.model = this.wurzel.getReferenz(this.name);
  	this.children = this.model.children;
  }
  
  subscribeToTable( o : Observer<TableItem[]>) {
  		this.model.children.subscribe(o); 
  }  
 
  
  setCurrentPosition( index:number ) {
  	this.model.setCurrentPosition(index);
  }
  
  
 }

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DialogComponent }  from './dialog.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observer} from 'rxjs/Observer';
import  'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-string',
  template: ``, //<div>{{name}} = {{value}} : {{defValue}}</div> `,
})

export class StringComponent implements OnInit { 

  @Input() name = "nn"; 
  @Input('default') defValue = "";
  
  private valueSubject : BehaviorSubject<string>;
  public value : Observable<string>;
  wurzel : DialogComponent;
  
  constructor(w: DialogComponent) {
    this.wurzel = w;
    //this.valueSubject = new BehaviorSubject('');
  }
  
  ngOnInit(){
  
    this.valueSubject = new BehaviorSubject(this.defValue);
    this.value = this.valueSubject.asObservable()
  
    this.wurzel.setReferenz(this.name,this);
    
  }
  
  update(value: string) { 
     this.valueSubject.next(value);
   }
  
 }

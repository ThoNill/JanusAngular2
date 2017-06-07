import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';

@Component({
  selector: 'app-dialog',
  template: "<h1>{{title}}</h1><ng-content></ng-content>",
})
export class DialogComponent  { 

  @Input() title = ""; 
  @Input() name = "";
  
  protected wurzel : AppComponent;
  
  constructor(w: AppComponent) {
    this.wurzel = w;
  }
  
  ngOnInit() {
    this.wurzel[this.name] = this;
  }
  
  setReferenz(refName : string, obj : any ) {
  	(this.wurzel[this.name])[refName] = obj;
  	this[refName] = obj;
  }
  
  getReferenz(refName : string) : any {
  	return (this.wurzel[this.name])[refName];
  }
  
  
  public neueId() : number {
  	return this.wurzel.neueId();
  }
  
 }

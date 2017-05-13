import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';

@Component({
  selector: 'app-string',
  template: ``, //<div>{{name}} = {{value}} : {{defValue}}</div> `,
})

export class StringComponent implements OnInit { 

  @Input() name = "nn"; 
  @Input('default') defValue = "";
  
  value = "";
  wurzel : AppComponent;
  
  constructor(w: AppComponent) {
    this.wurzel = w;
  }
  
  ngOnInit(){
    this.wurzel[this.name] = this.defValue;
  }
  
  update(value: string) { 
     this.value = value;
     this.wurzel[this.name] = value;
  }
  
 }

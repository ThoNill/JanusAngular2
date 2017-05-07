import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppComponent }  from './app.component';
import { MaptableComponent }  from './maptable.component';

@Component({
  selector: 'ENTRY',
  template: `<div>{{value}} ==&gt; {{text}}</div> `,
})

export class EntryComponent   implements OnInit {  

  @Input() value = "" 
  @Input() text = ""
  private map : MaptableComponent
  
  constructor(map: MaptableComponent) {
    this.map = map
  }

   ngOnInit(){
   	this.map.addEntry(this)
   } 
  
 }

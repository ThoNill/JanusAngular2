import { Component, OnInit } from '@angular/core';
import { AppComponent }  from './app.component';
import { EntryComponent }  from './entry.component';
import { TableDataBasis }  from './TableDataBasis';
import { MaptableItem }  from './MaptableItem';
import { TableColumnDescription}  from './TableColumnDescription';

// <DIV>Map: {{name}} <DIV><ng-content></ng-content></DIV></DIV>

@Component({
  selector: 'MAPTABLE',
  template: ``,
})

export class MaptableComponent  extends TableDataBasis { 
    
  constructor(w: AppComponent) {
    super(w);
    this.addColumnDescription(new TableColumnDescription("value"));
    this.addColumnDescription(new TableColumnDescription("text"));
  }
  
  addEntry ( e : EntryComponent) {
     var item = new MaptableItem(e.value,e.text,false);
     this.addTableItem(item);
    this.publishChanges()
  }
  
 
  
   ngOnInit() {
    super.ngOnInit()
    }
    
  }
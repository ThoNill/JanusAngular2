import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AbfrageService }  from '../abfrage.service';
import { MucolumnComponent } from '../mucolumn/mucolumn.component';
import { DialogComponent }  from '../dialog.component';
import { TableItem }  from '../TableItem';
import { TableDataBasis }  from '../TableDataBasis';
import { TableColumnDescription}  from '../TableColumnDescription';


@Component({
  selector: 'app-mutable',
  templateUrl: './mutable.component.html',
  styleUrls: ['./mutable.component.css']
})

export class MutableComponent extends TableDataBasis {

  @Input() abfrageText = "";
  private service:AbfrageService;
  
  
  wurzel : DialogComponent;
  
  constructor(w: DialogComponent,s:AbfrageService) {
  	super(w);
  	this.service = s;
  }
  
  addColumn(column : MucolumnComponent) {
    this.addColumnDescription(new TableColumnDescription(column.name));
  }
  
  
  abfragen() {
      this.service.setAbfrageText(this.abfrageText);
      this.service.getResultList().subscribe(this);
      
  }
  
  next( eArray : TableItem[]) {
      this.addArrayOfTableItems(eArray)
  }
  
  error( e : any) {
  }
  
  complete() {
   
  }
    

 
  ngOnInit() {
    super.ngOnInit();
    this.abfragen();
  }

}

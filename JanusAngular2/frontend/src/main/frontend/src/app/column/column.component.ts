import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ShowtableComponent } from '../showtable/showtable.component';


@Component({
  selector: 'COLUMN',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent implements OnInit {
  @Input() name = ""; 
  @Input() header = "";
  
  table : ShowtableComponent;
   
  constructor(table : ShowtableComponent ) { 
  	this.table = table;
    table.addColumn(this);
  }
  
  getCurrentObject() {
  	return this.table.getCurrentObject()[this.name];
  }
  

  ngOnInit() {
  }

}

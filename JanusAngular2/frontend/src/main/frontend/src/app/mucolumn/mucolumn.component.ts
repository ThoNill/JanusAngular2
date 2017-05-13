import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MutableComponent } from '../mutable/mutable.component';


@Component({
  selector: 'app-mucolumn',
  templateUrl: './mucolumn.component.html',
  styleUrls: ['./mucolumn.component.css']
})

export class MucolumnComponent implements OnInit {
  @Input() name = ""; 
  table : MutableComponent;
   
  constructor(table : MutableComponent ) { 
  	this.table = table;
  }
  
  getCurrentObject() {
  	return this.table.getCurrentObject()[this.name];
  }
  

  ngOnInit() {
    this.table.addColumn(this);
  }

}

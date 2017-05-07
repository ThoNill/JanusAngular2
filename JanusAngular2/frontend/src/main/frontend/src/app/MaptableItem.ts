import { TableItem }  from './TableItem';


export class MaptableItem implements TableItem { 

  value : string= ""; 
  text : string= "";
  selected : boolean = false;
  
  constructor(value : string, text : string, selected : boolean) {
    this.value = value
    this.text = text
    this.selected = selected
  }
  
  
 }

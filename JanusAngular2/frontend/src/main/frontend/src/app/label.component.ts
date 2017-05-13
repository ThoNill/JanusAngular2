import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: "<div class='margin10 no-margin-right ' >{{title}}</div>",
})
export class LabelComponent  { 

  @Input() title = ""; 
  
 }

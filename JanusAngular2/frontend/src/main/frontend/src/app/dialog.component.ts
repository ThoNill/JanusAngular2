import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'DIALOG',
  template: "<h1>{{title}}</h1><ng-content></ng-content>",
})
export class DialogComponent  { 

  @Input() title = ""; 
  
 }

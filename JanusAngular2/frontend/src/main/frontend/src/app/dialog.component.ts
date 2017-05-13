import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: "<h1>{{title}}</h1><ng-content></ng-content>",
})
export class DialogComponent  { 

  @Input() title = ""; 
  
 }

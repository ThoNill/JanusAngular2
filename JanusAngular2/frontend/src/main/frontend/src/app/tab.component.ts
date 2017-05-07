import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TabsComponent }  from './tabs.component';

// [hidden]="!active"

@Component({
  selector: 'TAB',
  template: `
   <div class='frame' [style.display]="active?'inherit':'none'" >
       <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent  { 

  @Input() title = ""; 
  
  tabid : string;
  
  active : boolean;
   
  tabs : TabsComponent;
  
  
  constructor (tabs : TabsComponent) {
    this.tabs = tabs;
    tabs.addTab(this);
    this.tabid = "tab" + tabs.length(); 
  } 
  
  
  
 }

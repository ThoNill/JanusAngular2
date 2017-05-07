import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TabComponent }  from './tab.component';

@Component({
  selector: 'TABS',
  template: `
  
  <DIV class='tabcontrol2' data-role='tabcontrol'  data-save-state='true'  >
               <ul class='tabs' >
                 <li   *ngFor="let item of this.listOfTabs; let row = index"> <a href="" (click)="selectTab(item)" >{{item.title}}</a></li>
               </ul>
               <DIV class='frames' >
                   <ng-content></ng-content>
               </DIV>
  </DIV>
  `,
})
export class TabsComponent  { 
    
  listOfTabs : TabComponent[] = [];
  
  selectTab(itab: TabComponent) {
    this.listOfTabs.forEach((tab) => {
      tab.active = false;
    });
    itab.active = true;
  }
  
  
  addTab(tab : TabComponent) {
    tab.active = (this.listOfTabs.length === 0);
   this.listOfTabs.push(tab);
   
  }
  
  length() {
    return this.listOfTabs.length;
  }
  
 }

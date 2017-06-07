import {
    Input,
    Component,
    Directive,
    ViewContainerRef,
    ComponentRef,
    TemplateRef,
    ContentChild,
    AfterViewInit,
    ElementRef,
    OnInit,
    OnChanges, NgModule} from "@angular/core";
import { DialogComponent }  from './dialog.component';

@Component({
  selector: 'app-label',
  template: ` <template [ngTemplateOutlet]="content" [ngOutletContext]="{ 'dialog' : dialog}"> </template>`,
})
export class LabelComponent    { 
  dialog : DialogComponent;
 	
  @ContentChild('title',{read: TemplateRef}) content : TemplateRef<Object>; 
  
   constructor(d: DialogComponent) {
    this.dialog = d;
  }
  
 }

 

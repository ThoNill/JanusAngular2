import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LabelComponent }  from './label.component';
import { DialogComponent }  from './dialog.component';
import { VBoxComponent }  from './vbox.component';
import { HBoxComponent }  from './hbox.component';
import { TextFieldComponent }  from './textfield.component';

import { MenubarComponent }  from './menubar.component';
import { MenuComponent }  from './menu.component';
import { MenuitemComponent }  from './menuitem.component';
import { ButtonComponent }  from './button.component';
import { StringComponent }  from './string.component';
import { MaptableComponent }  from './maptable.component';
import { EntryComponent }  from './entry.component';
import { ComboComponent }  from './combo.component';
import { ListComponent }  from './list.component';
import { RadioComponent }  from './radio.component';
import { TabsComponent }  from './tabs.component';
import { TabComponent }  from './tab.component';
import { ShowtableComponent } from './showtable/showtable.component';
import { MutableComponent } from './mutable/mutable.component';
import { ColumnComponent } from './column/column.component';
import { MucolumnComponent } from './mucolumn/mucolumn.component';

import { AbfrageService }  from './abfrage.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, TabsComponent, TabComponent, RadioComponent, ListComponent, ComboComponent, MaptableComponent, EntryComponent, StringComponent, ButtonComponent, MenubarComponent,  MenuComponent, MenuitemComponent,  VBoxComponent, HBoxComponent, LabelComponent, TextFieldComponent, DialogComponent, ShowtableComponent, MutableComponent, ColumnComponent, MucolumnComponent ],
   providers: [ AbfrageService] ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}

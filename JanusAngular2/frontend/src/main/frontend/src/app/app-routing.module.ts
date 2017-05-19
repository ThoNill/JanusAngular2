    import { NgModule }              from '@angular/core';
    import { RouterModule, Routes }  from '@angular/router';
    import { TabsPageComponent }     from './pages/tabs.page.component';
    import { TextfieldPageComponent }     from './pages/textfield.page.component';
    import { NichtDefiniertPageComponent }     from './pages/nichtDefiniert.page.component';
    import { BitteMenuAuswahlPageComponent }     from './pages/bitteMenuAuswahl.page.component';
    import { TabellenPageComponent }     from './pages/tabellen.page.component';
    import { MaptablePageComponent }     from './pages/maptable.page.component';
    
    
    
    
    const appRoutes: Routes = [
      { path: 'tabs', component: TabsPageComponent },
      { path: 'textfield', component: TextfieldPageComponent },
      { path: 'menuAuswahl', component: BitteMenuAuswahlPageComponent },
      { path: 'maptable', component: MaptablePageComponent },
      { path: 'tabellen', component: TabellenPageComponent },
      
      { path: '**', component: NichtDefiniertPageComponent },
     ];
     
    @NgModule({
      imports: [
        RouterModule.forRoot(appRoutes)
      ],
       
      exports: [
        RouterModule
      ]
    })
    export class AppRoutingModule {}
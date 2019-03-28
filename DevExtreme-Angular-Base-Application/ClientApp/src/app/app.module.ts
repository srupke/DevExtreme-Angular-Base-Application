import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleDataComponent } from './ExampleData/ExampleData.component';

// Imports all the DevExtreme widgets
//import { DevExtremeModule } from "devextreme-angular"; 
 
// Imports an individual widget
import { DxDataGridModule } from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    ExampleDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/ExampleData', pathMatch: 'full' },
      { path: 'ExampleData', component: ExampleDataComponent },
    ]),
    //DevExtremeModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

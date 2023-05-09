import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DInicialComponent } from './componentes/d-inicial/d-inicial.component';
import { DFinalComponent } from './componentes/d-final/d-final.component';
import { CantidadComponent } from './componentes/cantidad/cantidad.component';

@NgModule({
  declarations: [
    AppComponent,
    DInicialComponent,
    DFinalComponent,
    CantidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

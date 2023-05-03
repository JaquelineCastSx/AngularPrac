import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrettyTextComponent } from './components/pretty-text/pretty-text.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    PrettyTextComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

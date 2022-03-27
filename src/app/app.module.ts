import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularToastModule } from 'projects/angular-toasts/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularToastModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

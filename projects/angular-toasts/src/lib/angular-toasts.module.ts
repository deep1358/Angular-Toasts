import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularToastsComponent } from './angular-toasts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AngularToastsComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [AngularToastsComponent],
})
export class AngularToastModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActionComponent } from './action/action.component';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, ActionComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  bootstrap: [AppComponent],
})

export class AppModule {
  
}
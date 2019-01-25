import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreesComponent } from './trees.component';
import { CarsComponent } from './cars.component';
import { ClockComponent } from './clock.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ AppComponent, TreesComponent, CarsComponent, ClockComponent, NavbarComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

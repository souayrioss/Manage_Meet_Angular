import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {IndexComponent} from "./front_office/index/index.component";
import {ReactiveFormsModule} from "@angular/forms";
import { NewMeetComponent } from './back_office/new-meet/new-meet.component';
import { MeetsComponent } from './back_office/meets/meets.component';
import { NewTicketComponent } from './support/new-ticket/new-ticket.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NewMeetComponent,
    MeetsComponent,
    NewTicketComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { PublicoComponent } from './pages/publico/publico.component';

import { SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EscritorioComponent,
    HomeComponent,
    NuevoTicketComponent,
    PublicoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    SocketIoModule.forRoot(environment.socketConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

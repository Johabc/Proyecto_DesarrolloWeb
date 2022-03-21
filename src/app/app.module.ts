import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app.routing';
import { AnillosComponent } from './components/anillos/anillos.component';
import { CollaresComponent } from './components/collares/collares.component';
import { PulserasComponent } from './components/pulseras/pulseras.component';
import { PerfumesComponent } from './components/perfumes/perfumes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    BodyComponent,
    AnillosComponent,
    CollaresComponent,
    PulserasComponent,
    PerfumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

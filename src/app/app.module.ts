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
import { PpRegistroComponent } from './components/pp-registro/pp-registro.component';
import { FormularioInicioSesionComponent } from './components/formularios/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './components/formularios/formulario-registro/formulario-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerProductoComponent } from './ver-producto/ver-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    BodyComponent,
    AnillosComponent,
    CollaresComponent,
    PulserasComponent,
    PerfumesComponent,
    PpRegistroComponent,
    FormularioInicioSesionComponent,
    FormularioRegistroComponent,
    VerProductoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

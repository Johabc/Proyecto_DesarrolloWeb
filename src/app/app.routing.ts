import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { CarritoComponent } from "./carrito/carrito.component";
import { AnillosComponent } from "./components/anillos/anillos.component";
import { CollaresComponent } from "./components/collares/collares.component";
import { FormularioInicioSesionComponent } from "./components/formularios/formulario-inicio-sesion/formulario-inicio-sesion.component";
import { FormularioRegistroComponent } from "./components/formularios/formulario-registro/formulario-registro.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PerfumesComponent } from "./components/perfumes/perfumes.component";
import { PulserasComponent } from "./components/pulseras/pulseras.component";
import { NewUsersGuard } from "./new-users.guard";
import { VerProductoComponent } from "./ver-producto/ver-producto.component";


const routes = [
  {
    path: '', component: InicioComponent
  },
  {
  path: 'inicio', component: InicioComponent
  },
  {
    path: 'anillos', component: AnillosComponent
  },
  {
    path: 'collares', component: CollaresComponent
  },
  {
    path:'pulseras', component: PulserasComponent
  },
  {
    path:'perfumes', component: PerfumesComponent
  },
  {
    path:'inicioSesion', component: FormularioInicioSesionComponent
  },
  {
    path:'registro', component: FormularioRegistroComponent
  },
  {
    path:'verProducto', component: VerProductoComponent, canActivate: [AdminGuard]
  },
  {
    path:'carrito', component: CarritoComponent
  }

]

@NgModule(
  {
    imports:
    [
      RouterModule.forRoot(routes)
    ],
    exports:
    [
      RouterModule
    ]
  }
)
export class AppRoutingModule{

}

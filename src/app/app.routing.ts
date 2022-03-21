import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AnillosComponent } from "./components/anillos/anillos.component";
import { CollaresComponent } from "./components/collares/collares.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PerfumesComponent } from "./components/perfumes/perfumes.component";
import { PulserasComponent } from "./components/pulseras/pulseras.component";

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

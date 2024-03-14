import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/componentes/inicio/inicio.component';
import { PageNoFoundComponent } from './componentes/page-no-found/page-no-found.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'Galeria', component: GaleriaComponent},
  {path:'Contacto', component: ContactoComponent},
  {path:'**', component:PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

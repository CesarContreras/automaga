import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import {PreguntasComponent}from './preguntas/preguntas.component';
import {AboutComponent} from './about/about.component';
import {DestinoComponent} from './destino/destino.component';
import {ClienteComponent} from './cliente/cliente.component';
import {AyudaComponent}from './ayuda/ayuda.component';
import {ContactoComponent}from './contacto/contacto.component';
import {LoginComponent}from './login/login.component';

export const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'preguntasFrecuentes', component:PreguntasComponent},
  {path: 'about', component:AboutComponent},
  {path: 'Destino', component:DestinoComponent},
  {path: 'Cliente', component:ClienteComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'login', component:LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

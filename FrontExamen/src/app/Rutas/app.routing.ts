import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from "../Componentes/home/home.component";
import {Pagina2Component} from "../Componentes/pagina2/pagina2.component";
import {Pagina3Component} from "../Componentes/pagina3/pagina3.component";
import {Pagina4Component} from "../Componentes/pagina4/pagina4.component";
import {LoginComponent} from "../Componentes/login/login.component";
import {CrearAutorComponent} from "../Componentes/crear-autor/crear-autor.component";
import {CrearLibroComponent} from "../Componentes/crear-libro/crear-libro.component";

const appRoutes:Routes=[
  {path:'',component: LoginComponent},
  {path:'home/:id',component: HomeComponent},
  {path: 'paginaD/:id', component: Pagina2Component},
  {path: 'pagina3/:id', component: Pagina3Component},
  {path: 'pagina4/:id', component: Pagina4Component},
  {path: 'login', component: LoginComponent},
  {path: 'crearAutor', component: CrearAutorComponent},
  {path: 'crearLibro', component: CrearLibroComponent},
  {path:'**',component:LoginComponent}
  ];

export const appRoutingProviders :any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);


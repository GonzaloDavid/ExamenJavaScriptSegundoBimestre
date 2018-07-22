import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AutorComponent} from '../Componentes/autor/autor.component';
import {HomeComponent} from "../Componentes/home/home.component";
import {LibroComponent} from "../Componentes/Libros/libro.component";
import {FacturacionComponent} from "../Componentes/facturacion/facturacion.component";
import {Pagina2Component} from "../Componentes/pagina2/pagina2.component";
import {Pagina3Component} from "../Componentes/pagina3/pagina3.component";
import {Pagina4Component} from "../Componentes/pagina4/pagina4.component";

const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path: 'autor/:id/libro/:idlibro', component: LibroComponent},
  {path: 'paginaD/:id', component: Pagina2Component},
  {path: 'pagina3/:id', component: Pagina3Component},
  {path: 'pagina4', component: Pagina4Component},
  {path:'**',component:HomeComponent}
  ];

export const appRoutingProviders :any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);


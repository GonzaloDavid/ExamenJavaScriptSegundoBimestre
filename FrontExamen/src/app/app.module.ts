import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AutorComponent } from './Componentes/autor/autor.component';
import { InputSearchComponent } from './Componentes/input-search/input-search.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturacionComponent } from './Componentes/facturacion/facturacion.component';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing,appRoutingProviders} from './Rutas/app.routing';
import { HomeComponent } from './Componentes/home/home.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { Pagina3Component } from './Componentes/pagina3/pagina3.component';
import { Pagina4Component } from './Componentes/pagina4/pagina4.component';
import { FormularioCuentaComponent } from './Componentes/formulario-cuenta/formulario-cuenta.component';
import { LoginComponent } from './Componentes/login/login.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CrearAutorComponent } from './Componentes/crear-autor/crear-autor.component';
import { CrearLibroComponent } from './Componentes/crear-libro/crear-libro.component';
@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    InputSearchComponent,
    FacturacionComponent,
    HomeComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    FormularioCuentaComponent,
    LoginComponent,
    CrearAutorComponent,
    CrearLibroComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatInputModule,NoopAnimationsModule,routing,
    NgbModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

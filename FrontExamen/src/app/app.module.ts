import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AutorComponent } from './Componentes/autor/autor.component';
import { InputSearchComponent } from './Componentes/input-search/input-search.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibroComponent } from './Componentes/Libros/libro.component';
import { DetalleAutorComponent } from './Componentes/detalle-autor/detalle-autor.component';
import { DetalleLibroComponent } from './Componentes/detalle-libro/detalle-libro.component';
import { FacturacionComponent } from './Componentes/facturacion/facturacion.component';
import { ModalDatosComponent } from './Componentes/modal-datos/modal-datos.component';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    InputSearchComponent,
    LibroComponent,
    DetalleAutorComponent,
    DetalleLibroComponent,
    FacturacionComponent,
    ModalDatosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatInputModule,NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

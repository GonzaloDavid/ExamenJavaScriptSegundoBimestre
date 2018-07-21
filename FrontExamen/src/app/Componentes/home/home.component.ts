import { Component, OnInit } from '@angular/core';
import {Autor} from "../../Autor";
import {Libro} from "../../Libro";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hayAutores = false;
  autores: Autor[];

  hayLibros = false;
  libros: Libro[];
  constructor() { }

  ngOnInit() {
  }

  mostrarBusqueda(event: any) {
    console.log(event);
    this.hayAutores = true;
    this.hayLibros = true;
    this.autores = event;
    this.libros = event
  }
  }

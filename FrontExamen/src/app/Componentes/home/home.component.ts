import { Component, OnInit } from '@angular/core';
import {Autor} from "../../Autor";
import {Libro} from "../../Libro";
import {LibroService} from "../../Services/libro.service";
import {AutorService} from "../../Services/autor.service";
import {Usuario} from "../../Usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  librop : Libro[];
  autorp: Autor[];


  constructor(
    private libroService: LibroService,
    private autorService: AutorService) { }
  DetalleByName(nombre:string): void {
    this.libroService.getLibroByName(nombre).subscribe(data => {
      this.librop=data;
    });
    this.autorService.getAutorByName(nombre).subscribe(data1 => {
      this.autorp=data1;
    });
  }
  deleteAutor(autor: Autor): void {
    this.autorp = this.autorp.filter(h => h !== autor);
    this.autorService.deleteAutor(autor).subscribe();
  }
  deleteLibro(libro: Libro): void {
    this.librop = this.librop.filter(h => h !== libro);
    this.libroService.deleteLibro(libro).subscribe();
  }

  ngOnInit() {
  }
  }

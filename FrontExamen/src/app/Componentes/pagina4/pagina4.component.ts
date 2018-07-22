import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LibroService} from "../../Services/libro.service";
import {AutorService} from "../../Services/autor.service";
import {Libro} from "../../Libro";
import {CarritoService} from "../../Services/carrito.service";

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit {
  libro: Libro;
  libros1:Libro[];
  constructor(private rutas:  ActivatedRoute,
              private servicioLibro: LibroService,
              private servicioCarrito: CarritoService)
  {
    this.rutas.params.subscribe(params =>{
      this.servicioLibro.getLibroById(params[`id`]).subscribe(libro => {
        this.libro= libro;
      })
    })
  }
  allLibrosCarrito(): void {
    this.servicioCarrito.getAllCarrito()
      .subscribe(libro => {
        this.libros1 = libro;
      });
  }
  deleteCarrito(libro: Libro): void {
    this.libros1 = this.libros1.filter(h => h !== libro);
    this.servicioCarrito.deleteCarrito(libro).subscribe();
  }

  ngOnInit() {
    this.allLibrosCarrito()
  }

}

import { Component, OnInit } from '@angular/core';
import {Autor} from "../../Autor";
import {ActivatedRoute} from "@angular/router";
import {LibroService} from "../../Services/libro.service";
import {Libro} from "../../Libro";
import {CarritoService} from "../../Services/carrito.service";
import {Usuario} from "../../Usuario";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {
  libro: Libro;
  libro12:Libro;
  InombreL: string;
  INumeroPagL:string;
  IedicionL:string;
  IfechaPublicacionL:string;
  InombreEditorial:string;
  IdOwnerL:number;
  IurlL: string;
  IcantidadL:number;
  IcostoL:number;
  constructor(private rutas:  ActivatedRoute,
              private servicioLibro: LibroService,
              private servicioCarrito: CarritoService)
  {
    this.rutas.params.subscribe(params =>{
        this.servicioLibro.getLibroById(params[`id`]).subscribe(libro => {
          this.libro= libro;
          console.log('JSON LIBRROO:',this.libro)
        })
    })
  }
  add(): void {
    this.servicioCarrito.addCarrito(this.libro).subscribe(response => {
    })
  }
  EnviarActualizacion()
  {
    this.libro12=new Libro();
    this.libro12.nombre=this.InombreL;
    this.libro12.numeroPaginas=this.InombreEditorial;
    this.libro12.edicion=this.IedicionL;
    this.libro12.fechaPublicacion=this.IfechaPublicacionL;
    this.libro12.nombreEditorial=this.InombreEditorial;
    this.libro12.owner=this.IdOwnerL;
    this.libro12.cantidad=this.IcantidadL;
    this.libro12.costo=this.IcostoL;
    this.libro12.url=this.IurlL;

    this.servicioLibro.updateLibro(this.libro12).subscribe(response => {
    })
  }
  ngOnInit() {
  }

}

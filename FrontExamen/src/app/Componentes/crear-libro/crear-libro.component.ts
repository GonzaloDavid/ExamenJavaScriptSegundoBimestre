import { Component, OnInit } from '@angular/core';
import {Autor} from "../../Autor";
import {Libro} from "../../Libro";
import {AutorService} from "../../Services/autor.service";
import {LibroService} from "../../Services/libro.service";

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
libron:Libro;
  InombreL: string;
  INumeroPagL:string;
  IedicionL:string;
  IfechaPublicacionL:string;
  InombreEditorial:string;
  IdOwnerL:number;
  IurlL: string;
  IcantidadL:number;
  IcostoL:number;

  constructor(private serviceLibro:LibroService
  ) { }

  ngOnInit() {
  }
  add(): void {
    this.libron= new Libro();
    this.libron.nombre=this.InombreL;
    this.libron.numeroPaginas=this.InombreEditorial;
    this.libron.edicion=this.IedicionL;
    this.libron.fechaPublicacion=this.IfechaPublicacionL;
    this.libron.nombreEditorial=this.InombreEditorial;
    this.libron.owner=this.IdOwnerL;
    this.libron.cantidad=this.IcantidadL;
    this.libron.costo=this.IcostoL;
    this.libron.url=this.IurlL;

    this.serviceLibro.addLibro(this.libron).subscribe(response => {
    })
  }
}

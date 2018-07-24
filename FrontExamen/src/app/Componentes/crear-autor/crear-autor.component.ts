import { Component, OnInit } from '@angular/core';
import {AutorService} from "../../Services/autor.service";
import {Libro} from "../../Libro";
import {Autor} from "../../Autor";

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css']
})
export class CrearAutorComponent implements OnInit {
autorN: Autor;
InombreA:string;
IapellidoA:string;
InumeroLibroA:string;
IfechaNacimientoA:string;
IurlA:string;
  constructor(private serviceAutor: AutorService) { }

  ngOnInit() {
  }
  add(): void {
    this.autorN= new Autor();
    this.autorN.nombre=this.InombreA;
    this.autorN.apellido=this.IapellidoA;
    this.autorN.numeroLibros=this.InumeroLibroA;
    this.autorN.fechaNacimiento=this.IfechaNacimientoA;
    this.autorN.url=this.IurlA;
      this.serviceAutor.addAutor(this.autorN).subscribe(response => {
    })
  }

}

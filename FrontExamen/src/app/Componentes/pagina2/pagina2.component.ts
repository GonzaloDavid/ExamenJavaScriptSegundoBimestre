import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Autor} from "../../Autor";
import {AutorService} from "../../Services/autor.service";
import {Libro} from "../../Libro";
import {LibroService} from "../../Services/libro.service";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  autor: Autor;
  libro: Libro;
  autor12:Autor;
  IBname:string;
  IMnombre:string;
  IMapellido:string;
  IMNumeroLibros:string;
  IMFechaNacimiento:string;
  IMUrlImagen:string;
  constructor(private rutas:  ActivatedRoute,
              private servicioAutor: AutorService,
              private servicioLibro: LibroService)
  {
    this.rutas.params.subscribe(params =>{
      this.autor = new Autor();
      console.log('Esto es lo que muestra en los parametros que envia',params);
      this.servicioAutor.getAutorById(params[`id`]).subscribe(autor => {
        this.autor= autor;
        console.log('JSON AUTOR',this.autor)
      }),
      this.servicioLibro.getLibroByOwner(params[`id`]).subscribe(libro => {
        this.libro= libro;
        console.log('JSON LIBRROO:',this.libro)
      })
    })
  }
  EnviarActualizacionUsuario()
  {
    this.autor12=new Autor();
    this.autor12.id=this.autor.id;
    this.autor12.nombre=this.IMnombre;
    this.autor12.apellido=this.IMapellido;
    this.autor12.numeroLibros=this.IMNumeroLibros;
    this.autor12.fechaNacimiento=this.IMFechaNacimiento;
    this.autor12.numeroLibros=this.IMNumeroLibros;

    this.servicioAutor.updateAutor(this.autor12).subscribe(response => {
    })
  }
  ngOnInit() {
  }
}

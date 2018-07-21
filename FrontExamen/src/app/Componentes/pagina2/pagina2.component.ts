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
  constructor(private rutas:  ActivatedRoute,
              private servicioAutor: AutorService,
              private servicioLibro: LibroService)
  {
    this.rutas.params.subscribe(params =>{
      this.autor = new Autor();
      console.log('Esto es lo que muestra en los parametros que envia',params);
      this.servicioAutor.getAutorById(params[`id`]).subscribe(autor => {
        this.autor= autor;
       // console.log('autor',this.autor)
      }),
      this.servicioLibro.getLibroByOwner(params[`id`]).subscribe(libro => {
        this.libro= libro;
        //console.log('libro',this.libro)
      })
    })
    this.rutas.params.subscribe(params =>{
      this.autor = new Autor();
      this.libro = new Libro();
      console.log('Esto es lo que muestra en los parametros que envia',params);
      this.servicioAutor.getAutorById(params[`id`]).subscribe(autor => {
        this.autor= autor;
        // console.log('autor',this.autor)
      }),
        this.servicioLibro.getLibroByOwner(params[`id`]).subscribe(libro => {
          this.libro= libro;
          console.log('si ha estdo llegando ',this.libro)
        })
    })
  }
  ngOnInit() {
  }
}

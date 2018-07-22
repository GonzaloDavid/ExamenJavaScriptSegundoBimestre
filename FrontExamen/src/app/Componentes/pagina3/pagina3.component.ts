import { Component, OnInit } from '@angular/core';
import {Autor} from "../../Autor";
import {ActivatedRoute} from "@angular/router";
import {LibroService} from "../../Services/libro.service";
import {Libro} from "../../Libro";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {
  libro: Libro;
  constructor(private rutas:  ActivatedRoute,
              private servicioLibro: LibroService)
  {
    this.rutas.params.subscribe(params =>{
      console.log('Esto es lo que muestra en los parametros que envia',params);
        this.servicioLibro.getLibroById(params[`id`]).subscribe(libro => {
          this.libro= libro;
          console.log('JSON LIBRROO:',this.libro)
        })
    })
  }

  ngOnInit() {
  }

}
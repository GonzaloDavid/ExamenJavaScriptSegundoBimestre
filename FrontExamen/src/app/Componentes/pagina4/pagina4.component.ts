import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LibroService} from "../../Services/libro.service";
import {AutorService} from "../../Services/autor.service";
import {Libro} from "../../Libro";

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit {
  libro: Libro;
  constructor(private rutas:  ActivatedRoute,
              private servicioLibro: LibroService)
  {
    this.rutas.params.subscribe(params =>{
      this.servicioLibro.getLibroById(params[`id`]).subscribe(libro => {
        this.libro= libro;
      })
    })
  }

  ngOnInit() {
  }

}

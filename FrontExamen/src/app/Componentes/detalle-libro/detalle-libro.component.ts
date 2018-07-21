import { Component, OnInit } from '@angular/core';
import {AutorService} from '../../Services/autor.service';
import {Autor} from '../../Autor';
@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  constructor(private autorService:AutorService) { }

  ngOnInit() {
    this.getLibros();
  }
  autorp : Autor[];
  getLibros(): void {
    this.autorService.getAutores()
      .subscribe(autores => this.autorp = autores);
    //console.log(this.autorp)
  }

}

import { Component, OnInit } from '@angular/core';
import {AutorService} from '../../Services/autor.service';
import {Autor} from '../../Autor';
@Component({
  selector: 'app-detalle-autor',
  templateUrl: './detalle-autor.component.html',
  styleUrls: ['./detalle-autor.component.css']
})
export class DetalleAutorComponent implements OnInit {

  constructor(private autorService:AutorService) { }

  ngOnInit() {
    this.getAutores();
  }
  autorp : Autor[];
  getAutores(): void {
    this.autorService.getAutores()
      .subscribe(autores => this.autorp = autores);
    //console.log(this.autorp)
  }

}

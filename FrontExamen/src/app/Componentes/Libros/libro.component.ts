import { Component, OnInit } from '@angular/core';
import {AutorService} from '../../Services/autor.service';
import {Autor} from '../../Autor';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(private autorService:AutorService) { }

  ngOnInit() {
    this.getAutores();
  }
  autorp : Autor[];
  getAutores(): void {
    this.autorService.getAutores()
      .subscribe(autores => this.autorp = autores);
    console.log(this.autorp)
  }

}

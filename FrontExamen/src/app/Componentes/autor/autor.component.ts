import { Component, OnInit } from '@angular/core';
import {AutorService} from '../../Services/autor.service';
import {Autor} from '../../Autor';
@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  cuerpoCard='Some quick example text to build on the card title and make up the bulk of the card\'s content.';
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

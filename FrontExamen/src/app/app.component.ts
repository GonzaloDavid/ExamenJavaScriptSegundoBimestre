import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LibroService} from "./Services/libro.service";
import {AutorService} from "./Services/autor.service";
import {Autor} from "./Autor";
import {Libro} from "./Libro";
import {Usuario} from "./Usuario";
import {DatosUsuarioService} from "./Services/datos-usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor()
  {

  }
  ngOnInit() {
  }
}

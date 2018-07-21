import {Component, Input, OnInit} from '@angular/core';
import {LibroService} from "../../Services/libro.service";
import {Libro} from "../../Libro";
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  @Input() librop : Libro[];
  constructor(private libroService: LibroService) { }
  ngOnInit() {
   // this.getLibros();
  }
 /* librop : Libro[];
  getLibros(): void {
    this.libroService.getLibros()
      .subscribe(libros => this.librop = libros);

  }*/

}

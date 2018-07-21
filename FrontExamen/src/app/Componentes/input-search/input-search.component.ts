import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AutorService} from "../../Services/autor.service";
import {Autor} from "../../Autor";
import {Libro} from "../../Libro";
import {LibroService} from "../../Services/libro.service";

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  name: string;
  autors: Autor[];
  books: Libro[];

  @Output() autores: EventEmitter<Autor[]> = new EventEmitter<Autor[]>();
  @Output() bookss: EventEmitter<Libro[]> = new EventEmitter<Libro[]>();

  constructor(
    private autorService: AutorService,
    private libroService: LibroService
  ) { }

  ngOnInit() {
  }

  searchData() {
    this.autorService.getAutorByName(this.name)
      .subscribe(
        res => {
          this.autors = res;
          this.autores.emit(this.autors);
        }
      ),
    this.libroService.getLibroByName(this.name)
      .subscribe(
        res => {
          this.books = res;
          this.bookss.emit(this.books);
        }
      )
  }

}

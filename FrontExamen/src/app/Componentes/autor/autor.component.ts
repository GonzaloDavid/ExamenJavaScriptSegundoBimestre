import {Component, Input, OnInit} from '@angular/core';
import {AutorService} from '../../Services/autor.service';
import {Autor} from '../../Autor';
@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  constructor(private autorService:AutorService) {


  }
  @Input() autorp : Autor[];

  ngOnInit() {
    //this.getAutores();
  }

  /*getAutores(): void {
    this.autorService.getAutores()
      .subscribe(autores => this.autorp = autores);
    console.log(this.autorp)
  }*/
}

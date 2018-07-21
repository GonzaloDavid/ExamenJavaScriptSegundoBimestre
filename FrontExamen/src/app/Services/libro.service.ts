import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Libro} from '../Libro';
import {Autor} from "../Autor";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  //private URL ='http://localhost:1337/Libro';
  private urlBase = 'http://localhost:1337';
  constructor(private http: HttpClient) { }

 /* getLibros (): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.URL)
      .pipe(
        catchError(this.handleError('getLibros', []))
      );
  }*/
  getLibroByOwner(owner: number){
    const url = `${this.urlBase}/Libro?owner=${owner}`;
    return this.http.get<Libro>(url);
  }
  getLibroByName(name: string) {
    const url = `${this.urlBase}/Libro?nombre=${name}`;
    return this.http.get<Libro[]>(url);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}

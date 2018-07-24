import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Libro} from '../Libro';
import {Autor} from "../Autor";
import {catchError, tap} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private URL ='http://localhost:1337/Libro';
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
  getLibroById(id: number): Observable<Libro>{
    const url = `${this.urlBase}/Libro/${id}`;
    return this.http.get<Libro>(url);
  }
  addLibro (libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.URL, libro, httpOptions).pipe(
      tap(),
      catchError(this.handleError<Libro>('add autor'))
    );
  }
  deleteLibro(libroB: Libro | number): Observable<Libro> {
    const id = typeof libroB === 'number' ? libroB : libroB.id;
    const url = `${this.URL}/${id}`;
    return this.http.delete<Libro>(url, httpOptions).pipe(
      catchError(this.handleError<Libro>('deleteCluster'))
    );
  }
  updateLibro (libroM: Libro): Observable<any>  {
    const url = `${this.URL}/${libroM.id}`;
    return this.http.put(url, libroM, httpOptions).pipe(
      catchError(this.handleError<any>('updateuser'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Libro} from "../Libro";
import {catchError, tap} from "rxjs/internal/operators";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private urlCarrito = 'http://localhost:1337/Carrito';
  constructor(private http: HttpClient) { }

  getAllCarrito (): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.urlCarrito)
      .pipe(
        tap(clusters => this.log(`fetched clusters`)),
        catchError(this.handleError('getClusters', []))
      );
  }

  addCarrito (libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.urlCarrito, libro, httpOptions).pipe(
      tap(),
      catchError(this.handleError<Libro>('addCluster'))
    );
  }
  deleteCarrito (libroB: Libro | number): Observable<Libro> {
    const id = typeof libroB === 'number' ? libroB : libroB.id;
    const url = `${this.urlCarrito}/${id}`;

    return this.http.delete<Libro>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted cluster id=${id}`)),
      catchError(this.handleError<Libro>('deleteCluster'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {

  }
}


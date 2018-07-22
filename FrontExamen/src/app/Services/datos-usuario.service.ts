import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../Usuario";
import {catchError, tap} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  private urlBase = 'http://localhost:1337';
  private urlUsuario = 'http://localhost:1337/Usuario';
  constructor(private http: HttpClient) { }

  getUsuarioById(id: number): Observable<Usuario>{
    const url = `${this.urlBase}/Usuario/${id}`;
    return this.http.get<Usuario>(url);
  }
  updateUsuario (usuario: Usuario): Observable<any>  {
    const url = `${this.urlUsuario}/${2}`;
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => this.log(`updated cluster id=${2}`)),
      catchError(this.handleError<any>('updateuser'))
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


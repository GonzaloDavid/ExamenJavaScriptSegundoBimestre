import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Autor} from '../autor';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AutorService {
private URL ='http://localhost:1337/Autor';
private urlBase = 'http://localhost:1337';
  constructor(private http: HttpClient) { }

  getAutores (): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.URL)
      .pipe(
        catchError(this.handleError('getAutores', []))
      );
  }

  getAutorByName(name: string) {
    const url = `${this.urlBase}/Autor?nombre=${name}`;
    return this.http.get<Autor[]>(url);
  }
  getAutorById(id: number): Observable<Autor>{
    const url = `${this.urlBase}/Autor/${id}`;
    return this.http.get<Autor>(url);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';

interface Morty{
  id: number,
  name: string,
  status: string,
  species: string,
  image: string
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private http = inject(HttpClient);

  constructor() {}

  //https://rickandmortyapi.com/api/character
  getMortys(): Observable<any> {
    return this.http
      .get<any>(`https://rickandmortyapi.com/api/character`)
      .pipe(map((r) => r.results));
  }

  getMorty(id: number): Observable<any> {
   return this.http
      .get<any>(`https://rickandmortyapi.com/api/character/${id}`)
      .pipe(map ((data: Morty) => {
        return {
          id: data.id,
          name: data.name,
          status: data.status,
          species: data.species,
          image: data.image
        }
      } ));
  }
}

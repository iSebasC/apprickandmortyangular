import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  urlBase: string = 'https://rickandmortyapi.com/api/character'
  constructor(private http: HttpClient) {}


  get(): Observable<any>{
    return this.http.get(this.urlBase).pipe(
      map(
        (res: any) => {
          const { results } = res;
          return results
        }
      )
    );
  }
}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private readonly _BASE_URL: string = 'https://punkapi.online/v3';
  private readonly _HTTP = inject(HttpClient);

  public getRandomBeer(): Observable<Beer> {
    return this._HTTP.get<Beer>(`${this._BASE_URL}/beers/random`);
  }

  public getBeerbyId(id: string): Observable<Beer> {
    return this._HTTP.get<Beer>(`${this._BASE_URL}/beers/${id}`);
  }

  public getBeersByPage(page_number: number): Observable<Beer[]> {
    return this._HTTP.get<Beer[]>(
      `${this._BASE_URL}/beers?page=${page_number}`
    );
  }

  public getBeerImage(id: string): Observable<string> {
    return this._HTTP.get<string>(`${this._BASE_URL}/images/${id}`);
  }
}

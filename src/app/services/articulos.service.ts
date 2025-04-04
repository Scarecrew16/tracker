import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articuloApi';

// import { ArticuloResult } from '../interfaces/articuloApi';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  constructor(private httpClient: HttpClient){}
  public getAllArticulos(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/articulos');
  }
}

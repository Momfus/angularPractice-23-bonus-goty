import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

import { Game } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor( private http: HttpClient ) { }

  getNominados(): Observable<Game> {

    return this.http.get<Game>( `${ environment.url }/api/goty` ); // Se parametriza que devuelva interface Game (ayuda evitar errores)

  }

}

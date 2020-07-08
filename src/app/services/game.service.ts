import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

import { Game } from '../interfaces/interfaces';
import { tap, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados(): Observable<Game[]> {

    if ( this.juegos.length > 0 ) {

      // No hay juegos cargados (evitar que vuelvan a cargarse de nuevo)
      console.log('Desde caché');
      return of(this.juegos);

    } else {

      console.log('Desde Internet');
      return this.http.get<Game[]>( `${ environment.url }/api/goty` ) // Se parametriza que devuelva interface Game (ayuda evitar errores)
                  .pipe(
                    tap ( // Dispara un efecto secundario al traer los datos en y filtrados por pipe
                      juegos => this.juegos = juegos
                    )
                  );
    }
  }

  votarJuego( id: string ): Observable<object> {

    return this.http.post( `${ environment.url }/api/goty/${ id }`, {} ) // El segundo es vacio porque en un psot se envia siempre un body
                .pipe(

                  catchError( err => {

                    console.log('Error en la petición');
                    // En caso de no devolver nada, hay que devolver un "of" vacio aunque sea porque se espera un observable
                    return of( err.error );

                  } )

                );
  }

}

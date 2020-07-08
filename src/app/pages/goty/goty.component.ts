import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

import { Game } from '../../interfaces/interfaces';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {


    this.gameService.getNominados()
        .subscribe( res => {

          this.juegos = res;

        });

  }

  votarJuego( juego: Game ): void {

    // console.log(juego);
    this.gameService.votarJuego(juego.id)
        .subscribe( (res: { ok: boolean, mensaje: string}) => { // El tipado asi o con "tipo any" o una interface

          if ( res.ok === true ) {

            Swal.fire( 'Gracias', res.mensaje, 'success' );

          } else {

            Swal.fire('Oops', res.mensaje, 'error')

          }

        });

  }

}

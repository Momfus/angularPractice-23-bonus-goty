import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Game } from '../../interfaces/interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  juegos: any = []; // Es any (y no Game, se puede hacer otra interface) porque tiene menos atributos que ese

  constructor( private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
        .pipe( // Filtrar el contenido nomas deseado
          map( (res: Game[] ) => {

            // Una forma
            // En la parte derecha, al ser de mismo nombre, name: name es lo mismo
            return res.map( ({ name, votos }) => ({ name, value: votos }));

            // Otra forma anterior en javascript sin los objetos prototipados de javascript
            // return res.map( juego => {
            //   return {
            //     name: juego.name,
            //     value: juego.votos
            //   };
            // });

          } )
        )
        .subscribe( juegos => {

          // console.log(juegos);
          this.juegos = juegos;


        });

  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  results: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 25
    },
    {
      name: 'Juego 3',
      value: 15
    },
    {
      name: 'Juego 4',
      value: 30
    },
  ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme =  'nightLights';

  intervalo;

  constructor() {

    // Recorrer los reusltados y asignar un valor entero aleatorio en un intervalo 1.5 segundos
    this.intervalo = setInterval( () => {

      console.log('tik');

      // La documentacióin de ngx charts, para realizar cambios, hay quer cmabiar todo el objeto (y no un valor particular)
      /*Lo siguiente extrae todos los resultados del arreglo (cada objeto) y regresa un nuevo arrelo en newResults
      (rompe la relación de javacript con los objetos) */
      const newResults = [...this.results];

      for ( const i in newResults ) {

        if ( this.results[i] ) {
          this.results[i].value = Math.round( Math.random() * 100 );
        }

      }

      this.results = [...newResults]; // Coloca el arreglo nuevo con los varlores cambiados al arreglo original


    }, 1500);

  }

  onSelect(event): void {
    console.log(event);
  }

  ngOnDestroy(): void {

    /* De esta forma se evita la fuga de memoria para borrar la subscripción al setIntervalo al salir del componente
    y si se vuelve a seleccionar */
    clearInterval( this.intervalo );

  }

}

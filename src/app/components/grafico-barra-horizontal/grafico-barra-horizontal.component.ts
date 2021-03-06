import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  @Input() results: any[] = [];

  // Datos usados de ejemplo fijo
  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 20
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 25
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 15
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 30
  //   },
  // ];


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

  constructor() {}

  onSelect(event): void {
    console.log(event);
  }


}

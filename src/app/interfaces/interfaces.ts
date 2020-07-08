// Se podria usar el model, pero usarlo de esta manera permite realizar interfacez mas complejas con getters, setters, métodos, etc

export interface Game {

  // tslint:disable: typedef-whitespace
  id     : string;
  name   : string;
  url    : string;
  votos  : number;

}

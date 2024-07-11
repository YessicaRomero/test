import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {

  puntajes(a:number, b:number, c:number){
    if(a+b+c < 15){
        return 'la suma de sus numeros es menor a 15'
    } else{
        return 'La suma es mayor a 15'
    } 
  }

    suma(a:number, b:number): number{
      return a + b;
    }
    mensajeBienvenida() {
      return 'Bienvenidos'
    }
    
}

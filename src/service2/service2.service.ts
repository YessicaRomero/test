import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {

    ingresarName(nombre:string) {
       if(nombre === 'Claudia'){
        return 'Usuario correcto'
       }else {
        return 'vuelva a ingresar su nombre'
       }
        
    }
    
    edades(edad:number){
       let edadesPermitidas = [18, 26 , 33];
       if( edadesPermitidas.includes(edad)){
        return "usted puede ingresar"
       }
    }
    valor(peso:number){
        if(peso < 500){
            return 'gaseosa';
        } else if (peso === 1000){
            return  'gaseosa + pancho';
        } else(peso === 2000);{
            return 'lleva un postre';
        }
    }


}

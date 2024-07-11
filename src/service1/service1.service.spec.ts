import { Test, TestingModule } from '@nestjs/testing';
import { Service1Service } from './service1.service';
import exp from 'constants';

describe('Service1Service', () => {
  let service: Service1Service;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service1Service],
    }).compile();

    service = module.get<Service1Service>(Service1Service);
  });

  it('debe devolver un return mayor a 15', ()  => {
    expect(service.puntajes(5,9,7)).toBe('La suma es mayor a 15')
    
  });
  it('debe devolver un return menor a 15', ()  => {
    expect(service.puntajes(5,1,2)).toBe('la suma de sus numeros es menor a 15')
    
  });

  it('debe devolver un return de la suma que ingrese', ()  => {
    expect(service.suma(5,9)).toBe(14)
  
  })
  it('debe retornar como mensaje Bienvenido',() =>{
    expect(service.mensajeBienvenida()).toBe('Bienvenidos')
  })
 

});

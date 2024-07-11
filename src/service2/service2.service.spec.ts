import { Test, TestingModule } from '@nestjs/testing';
import { Service2Service } from './service2.service';

describe('Service2Service', () => {
  let service: Service2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2Service],
    }).compile();

    service = module.get<Service2Service>(Service2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('nombre de usuario Claudia', () => {
  //   expect(service.ingresarName('Claudia')).toBe('Usuario correcto')
  // });
  // it('nombre incorrecto', () => {
  //   expect(service.ingresarName('Yessica')).toBe('vuelva a ingresar su nombre')
  // });

  // it('comprobar que edad es correcta', () => {
  //   expect(service.edades(18)).toBe('usted puede ingresar')
  // });
  it('el peso ingresado es menor a 500', () => {
    expect(service.valor(300)).toBe('gaseosa')
  });

  it('el peso ingresado es igual a 1000', () => {
    expect(service.valor(1000)).toBe('gaseosa + pancho')
  });
  it('el peso ingresado es igual a 2000', () => {
    expect(service.valor(2000)).toBe('lleva un postre')
  });
});

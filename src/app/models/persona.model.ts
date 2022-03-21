export interface IPersona{
 email: string;
 contra: string;
}

export class Usuario implements IPersona
{
  email: string;
  contra: string;
}

export class Registro implements IPersona
{
  email: string;
  contra: string;

  nombre: string;
  apellido: string;
  confEmail: string;
  confContra: string;
}

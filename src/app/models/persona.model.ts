export interface IPersona{
  nombre: string;

}

export class Usuario implements IPersona
{
  nombre: string;
  email: string;

}

export class Administrador implements IPersona
{
  nombre: string;
}

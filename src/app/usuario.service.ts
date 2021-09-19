import { Injectable } from '@angular/core';
import {Usuario} from './usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: Usuario[] =
  [

    {
    id            : 1,
    nombre        : 'Marcelo',
    contrasenia   : '123'
    },
    {
    id            : 2,
    nombre        : 'Pepe',
    contrasenia   : '456'
    },
    {
    id            : 3,
    nombre        : 'Jorge',
    contrasenia   : '789'
    }
  ]
  constructor() { }
}

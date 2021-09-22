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
  
  // CRUD de playas
  getUsuarios(){ return this.usuario}
  
  getUsuario(id:number)
  {
    return this.usuario.find( x => { return x.id == id})
  }
  deleteUsuario(id: number){
    this.usuario = this.usuario.filter( x=> {return x.id != id})
  }  
  addUsuario(nombre: string, contrasenia: string)
  {
    this.usuario.push({
      id        : (this.usuario.length + 1),
      nombre    : nombre,
      contrasenia: contrasenia
    })
  }
}

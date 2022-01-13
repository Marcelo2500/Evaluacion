import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HomePage } from './home/home.page';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  usLogin = ""
  constructor(private storage: Storage,
              private publicaciones: Storage,) {
    this.init()
    this.initPost();
  }
  async init()
  {
    await this.storage.create();
  }
  async initPost()
  {
    await this.publicaciones.create();
  }
  async addPost(publicacion: any) 
  {
    let idP = await this.publicaciones.length() + 1;
    await this.publicaciones.set(idP.toString(), publicacion);
    await localStorage.setItem(idP.toString(), publicacion);
  }
  async getPosts(){ return this.publicaciones}
  

  async usuario(nombre: string){
    this.usLogin = nombre;
  }
  async retUsuario(){
    return this.usLogin;
  }
  async agregar(valor: any)
  {
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(), valor);
    await localStorage.setItem(id.toString(), valor);
  }
   
  async leer(nombre: string)
  {
    //return await this.storage.get(key);
    let dato = null;
    await this.storage.forEach((v,k) => 
    {
      if(v[0].nombre == nombre)
      {
        dato = v;
      }
    })
    return dato;
  }
  async leer2(contrasenia: string)
  {
    //return await this.storage.get(key);
    let dato = null;
    await this.storage.forEach((v,k) => 
    {
      if(v[0].contrasenia == contrasenia)
      {
        dato = v;
      }
    })
    return dato;
  }
  async listar()
  {
    const listado = [];
    await this.storage.forEach((v,k) => { listado.push(v);});
    return listado;
  }
  async eliminar(nombre:string)
  {
    let key = null;
    await this.storage.forEach((v,k) => 
    {
      if(v[0].nombre == nombre)
      {
        key = k;
      }
    })
    this.storage.remove("" + key);
  }


}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) {
    this.init();
  }
  async init()
  {
    await this.storage.create();
  }

  async agregar(valor: any)
  {
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(), valor);
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

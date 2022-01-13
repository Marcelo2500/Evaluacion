import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private apiURL = 'https://jsonplaceholder.typicode.com/';
  listado = []
  constructor(private http: HttpClient) { }

  getUsers()
  {
    let url = this.apiURL + 'users';
    this.listado = []
    return new Promise((resolve, reject) =>{
      this.http.get(url).subscribe((data: []) =>{
        data.forEach(item => {this.listado.push(item);})
        //console.table(this.listado);
      },
      err => {
        console.log("Ocurrio un error");
      })
    })
  }
  // Tarea: crear una nueva pagina y mostrar los sgtes datos:
  /*
    id,name, username, adress y email
    del usuario seleccionado de la lista
    https://jsonplaceholder.typicode.com/users/1
  */
}

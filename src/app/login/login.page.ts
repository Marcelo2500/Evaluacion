import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

// permite enviar al usuario a otra pagina
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios = []
  aviso : string;
  user: string = "Marcelo";
  contrasenia: string = "1234";
  aviso2 : string;
  constructor(private usuario: UsuarioService,
              private router : Router
) { }

  ngOnInit() {
  this.usuarios = this.usuario.getUsuarios()
  }
  // al volver a ingresar a la pagina se recarga los datos de las playas
  // disponible en el servicio. 
  ionViewWillEnter() {
  this.usuarios = this.usuario.getUsuarios()
  }
  cambiar()
  {
  this.router.navigate(['/cambiar'])
  }













  ingresar(d1 : HTMLInputElement,
           d2 : HTMLInputElement)

  {//30 40 30
    let us = String(d1.value);
    let co = String(d2.value);
    if ("" == us){
      this.aviso = "Ingrese usuario";
    }
    else if (this.user == us) {
      if ("" == co) {
        this.aviso = "Ingrese contraseña";
      }
      else if (this.contrasenia == co) {
        this.aviso = "Datos correctos";
      }
      else {
        this.aviso = "Contraseña incorrecta";
      }
    } 
    else {
      this.aviso = "Usuario incorrecto";
    }
  }
  cambiarC(cCon1: HTMLInputElement,
           cCon2: HTMLInputElement)
    
    {
    let ncon = String(cCon1.value);

    if (cCon1 = cCon2){
      this.contrasenia = ncon;
      this.aviso2 = "Contraseña cambiada correctamente";
    }
    else if (cCon1 != cCon2){
      this.contrasenia = ncon;
      this.aviso2 = "Las contraseñas no coinciden";
    }
    else {
      this.aviso2 = "Contraseña cambiada incorrectamente";
    }

  }
}

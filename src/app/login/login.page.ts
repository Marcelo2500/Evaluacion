import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  aviso : string;
  user: string = "Marcelo";
  contrasenia: string = "1234";
  aviso2 : string;
  constructor() { }

  ngOnInit() {
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

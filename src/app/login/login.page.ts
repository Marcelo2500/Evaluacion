import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { AlertController, ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';

// permite enviar al usuario a otra pagina
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios = []
  listado = []
  nom : any;
  con : any;
  aviso : string;
  aviso2 : string;
  existenDatos = "";
  constructor(private usuario: UsuarioService,
              private router : Router,
              private crud: CrudService,
              private toast: ToastController,
              private alertController: AlertController
) { }

  ngOnInit() {
  this.usuarios = this.usuario.getUsuarios()
  }
  // al volver a ingresar a la pagina se recarga los datos de las playas
  // disponible en el servicio. 
  ionViewWillEnter() {
  this.usuarios = this.usuario.getUsuarios()
  }
  ingresarUs()
  {
  this.router.navigate(['/ingresar-user'])
  }


  ///////////////////////////////////////////////
  async listar()
  {
    this.nom = "";
    this.existenDatos = null;
    this.listado = await this.crud.listar();
    if(this.listado.length == 0)
      this.existenDatos = "1";
  }
  async ingresar(txtNombre: HTMLInputElement, txtContrasenia: HTMLInputElement){
    this.listado = [];
    this.nom = await this.crud.leer(txtNombre.value);
    this.con = await this.crud.leer2(txtContrasenia.value);
    if(this.nom == null)
    {
      const toast = await this.toast.create({
        message : 'Nombre y/o Contraseña incorrectos',
        duration: 3000,
        color   : "danger",
        position: "middle"
      });
      toast.present();
    }
    else if(this.con == null)
    {
      const toast = await this.toast.create({
        message : 'Nombre y/o Contraseña incorrectos',
        duration: 3000,
        color   : "danger",
        position: "middle"
      });
      toast.present();
    }
    else
    {
      this.crud.usuario(this.nom)
      this.router.navigate(['/home'])
      
      //this.crud.usuario(this.nom);
    }
  }

  async eliminar(txtNombre: HTMLInputElement, txtContrasenia: HTMLInputElement)
  {
        // Ejercicio: perdir confirmar la eliminacion del rut y limpiar el form
    // si se elimino el rut
    //alertController
    this.nom = await this.crud.leer(txtNombre.value);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar Eliminación',
      message: '<strong>¿Está seguro de continuar?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        }, 
        {
          text: 'Si',
          handler: () => {
            this.crud.eliminar(this.nom[0].nombre);
            this.nom = "";              
          }
        }
      ]
    });

    await alert.present();

  }
  /*  ingresar(d1 : HTMLInputElement,
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
  */
  /*  cambiarC(cCon1: HTMLInputElement,
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
  */

  //login()
}

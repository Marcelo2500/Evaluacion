import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-ingresar-user',
  templateUrl: './ingresar-user.page.html',
  styleUrls: ['./ingresar-user.page.scss'],
})
export class IngresarUserPage implements OnInit {

  constructor(
              private crud: CrudService,
              private toast: ToastController,
              private router : Router,
              private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async agregar(txtNombre: HTMLInputElement, txtContrasenia: HTMLInputElement)
  {
    // TAREA: guardar los datos del form en formato json  key-value
    if(txtNombre.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message : 'Falta especificar el nombre',
        duration: 2000,
        color   : "danger",
        position: "middle"
      });
      toast.present();
    }
    else if(txtContrasenia.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message : 'Falta especificar la contraseña',
        duration: 2000,
        color   : "danger",
        position: "middle"
      });
      toast.present();
    }
    else
    {
    
      const datos = [{"nombre": txtNombre.value,
                      "contrasenia"  : txtContrasenia.value
                    }]
      this.crud.agregar(datos);
      const toast = await this.toast.create({
        message : 'El usuario fue guardado',
        duration: 2000,
        color   : "success",
        position: "middle"
      });
      toast.present();

      txtNombre.value = "";
      txtContrasenia.value = "";
      this.router.navigate(['/login'])
    }
  }
}

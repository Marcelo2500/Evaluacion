import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
// permite devolver al usuario a la pagina playas(listado)
import { Router  } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-postear',
  templateUrl: './postear.page.html',
  styleUrls: ['./postear.page.scss'],
})
export class PostearPage implements OnInit {



  constructor(private toast: ToastController,
              private crud: CrudService,
              private router  : Router) { }

  ngOnInit() {
  }

  async agregar(txtTitulo : HTMLInputElement, 
          txtUrl: HTMLInputElement, 
          txtComentario: HTMLInputElement)
  {

  if(txtTitulo.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message : 'No ha ingresado un titulo',
      duration: 2000,
      color   : "danger",
      position: "middle"
    });
    toast.present();
  }
  else if(txtUrl.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message : 'No ha ingresado una imagen',
      duration: 2000,
      color   : "danger",
      position: "middle"
    });
    toast.present();
  }
  else if(txtComentario.value.trim().length == 0)
  {
    const toast = await this.toast.create({
      message : 'No ha ingresado un comentario',
      duration: 2000,
      color   : "danger",
      position: "middle"
    });
    toast.present();
  }
  else
  {
  const post =  [{"nomUs": this.crud.retUsuario(),
                  "titulo": txtTitulo.value,
                  "url"  : txtUrl.value,
                  "comentario"  : txtComentario.value,
    }]
  this.crud.addPost(post);
  // envia al usuario a otra pagina
  this.router.navigate(['/home']);
  }
  }
  

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts = []
  constructor(private usuario: UsuarioService,
              private router : Router,
              private crud: CrudService,
              private toast: ToastController,
              private alertController: AlertController) {}



  newPost()
  {
    this.router.navigate(['/postear'])
  }
  
}
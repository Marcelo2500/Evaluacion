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
  posts: any
  existenDatos: any;
  nom: string;
  constructor(private usuario: UsuarioService,
              private router : Router,
              private crud: CrudService,
              private toast: ToastController,
              private alertController: AlertController) {}

  ngOnInit() {
    this.posts = this.crud.getPosts()
  }

  ionViewWillEnter() {
    this.posts = this.crud.getPosts()
  }
  newPost()
  {
    this.router.navigate(['/postear'])
  }
  async listar()
  {
    this.nom = "";
    this.existenDatos = null;
    this.posts = await this.crud.getPosts();
    if(this.posts.length == 0)
      this.existenDatos = "1";
  }
}
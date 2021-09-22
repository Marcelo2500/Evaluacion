import { Component, OnInit } from '@angular/core';
// permite rescatar los parametros de la url :id
import { ActivatedRoute, Router } from '@angular/router';

//importar el modelo
import { Usuario } from '../usuario.model';
// importar servicios con los datos de las playas
import { UsuarioService } from '../usuario.service';
// importar el componente alert control
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.page.html',
  styleUrls: ['./cambiar.page.scss'],
})
export class CambiarPage implements OnInit {
  usuario : Usuario
  constructor(  
    private activatedRouter: ActivatedRoute,
    private lugaresService : UsuarioService,
    private router : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    // captura del parametro definido en el app-routing
    this.activatedRouter.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('id');
      this.usuario = this.lugaresService.getUsuario(Number(id));
    })
  }
}

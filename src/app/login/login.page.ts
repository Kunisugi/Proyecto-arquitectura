import { Component, OnInit } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public listaUsuarios: Array<any> = [];

  constructor(private DB: DbService ) { }

  ngOnInit() {

    this.DB.listarProductos$.subscribe(datos => {
      this.listaUsuarios = datos;
      console.log(this.listaUsuarios, '---> listar usuarios')
    });


  }

}

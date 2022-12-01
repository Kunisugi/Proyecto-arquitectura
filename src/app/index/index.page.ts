import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private alertController: AlertController) { }
  public Alertt : boolean = false;

  ngOnInit() {
  }

  async alertaPrendida() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '',
      message: 'Acceso restringido',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async alertaApagada() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '',
      message: 'Acceso permitido',
      buttons: ['OK'],
    });

    await alert.present();
  }

  public toggle(){
    console.log(this.Alertt)
    if(this.Alertt == true){
      this.alertaPrendida();

    }else{
      this.alertaApagada();

    }

  }



}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.page.html',
  styleUrls: ['./retirar.page.scss'],
})
export class RetirarPage implements OnInit {

  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Su retiro fue exitoso!',
      subHeader: 'Nuevo saldo',
      message: '$$$$$$$.',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}

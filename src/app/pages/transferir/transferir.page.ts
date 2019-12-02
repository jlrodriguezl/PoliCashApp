import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.page.html',
  styleUrls: ['./transferir.page.scss'],
})
export class TransferirPage implements OnInit {

  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Su transferencia  fue exitosa!',
      subHeader: 'Nuevo saldo',
      message: '$$$$$$$.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}

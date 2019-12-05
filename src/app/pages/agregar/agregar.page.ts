import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  constructor(public alertController: AlertController) { }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Bienvenido! Para continuar LLena la siguente informacion :)',
      inputs: [
        {
          name: 'Codigo de Retiro',
          type: 'text',
          placeholder: 'Ingrese el codigo'
        },
        {
          name: 'Valor Retiro',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Valor Retiro'
        },
        {
          name: 'Condiciones: La accion de utilizar este medio se debe a su autprizacion para el manejo de la informacion si tiene dudas comuniquece con nuestro asesores '
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}

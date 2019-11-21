import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-ahorrar",
  templateUrl: "./ahorrar.page.html",
  styleUrls: ["./ahorrar.page.scss"]
})
export class AhorrarPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async ahorrar() {
    const alert = await this.alertController.create({
      header: "Exitoso!",
      subHeader: "Ahorraste",
      message: "0000000",
      buttons: ["OK"]
    });

    await alert.present();
  }
}

import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Movimiento } from "src/app/models/movimientos.model";
import { MovimientoService } from "src/app/services/movimiento.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-ahorrar",
  templateUrl: "./ahorrar.page.html",
  styleUrls: ["./ahorrar.page.scss"]
})
export class AhorrarPage implements OnInit {
  monto: number;
  idCuenta = 2;
  movimiento: Movimiento;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private movimientoService: MovimientoService
  ) {
    this.movimiento = new Movimiento(
      "C",
      "0",
      0,
      "E",
      "93474647",
      "Abono a la cuente de ahorro",
      0
    );
  }

  ngOnInit() { }

  async ahorrar() {
    this.movimiento.valorMovimiento = this.monto;
    this.movimiento.idCuenta = this.idCuenta;
    console.log(this.movimiento);
    this.ahorrarMov();
    const alert = await this.alertController.create({
      header: "Exitoso!",
      subHeader: "Ahorraste",
      message: String(this.monto),
      buttons: ["OK"]
    });

    await alert.present();
  }

  ahorrarMov() {
    this.movimientoService.ahorrar(this.movimiento).subscribe(
      response => {
        console.log(response.code);
        if (response.code === 200) {
          this.router.navigate(["/ahorrar"]);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

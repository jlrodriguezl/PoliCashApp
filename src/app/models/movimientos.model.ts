export class Movimiento {
  idMovimiento: number;
  tipoMovimiento: string;
  fechaMovimiento: Date;
  descMovimiento: string;
  valorMovimiento: number;
  estadoMovimiento: string;
  codigoAuth: string;
  detMovimiento: string;
  idCuenta: number;

  constructor(
    tipoMovimiento: string,
    descMovimiento: string,
    valorMovimiento: number,
    estadoMovimiento: string,
    codigoAuth: string,
    detMovimiento: string,
    idCuenta: number
  ) {
    this.tipoMovimiento = tipoMovimiento;
    this.fechaMovimiento = new Date();
    this.descMovimiento = descMovimiento;
    this.valorMovimiento = valorMovimiento;
    this.estadoMovimiento = estadoMovimiento;
    this.codigoAuth = codigoAuth;
    this.detMovimiento = detMovimiento;
    this.idCuenta = idCuenta;
  }
}

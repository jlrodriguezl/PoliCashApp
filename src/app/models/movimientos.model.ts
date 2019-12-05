export class Movimiento {
  idMovimiento: number;
  tipoMovimiento: string;
  fechaMovimiento: Date;
  descMovimiento: string;
  valorMovimiento: number;
  estadoMovimiento: string;
  codigoAuth: string;
  detMovimiento: string;

  constructor(
    idMovimiento: number,
    tipoMovimiento: string,
    descMovimiento: string,
    valorMovimiento: number,
    estadoMovimiento: string
  ) {
    this.idMovimiento = idMovimiento;
    this.tipoMovimiento = tipoMovimiento;
    this.fechaMovimiento = new Date();
    this.descMovimiento = descMovimiento;
    this.valorMovimiento = valorMovimiento;
    this.estadoMovimiento = estadoMovimiento;
  }
}

export class ContaModel {
  constructor(public numero: string, public saldo: number) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number) {
    this.saldo -= valor;
  }
}

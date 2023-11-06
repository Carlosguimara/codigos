export class ContaModel {
  constructor(public numero: string, public saldo: number) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (this.temSaldo(valor)) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }

  temSaldo(valor: number): boolean {
    return valor <= this.saldo;
  }
}

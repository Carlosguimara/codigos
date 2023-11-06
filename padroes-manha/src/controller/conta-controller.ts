import { ContaModel } from "../model/conta-model";
import { ContaView } from "../view/conta-view";

export class ContaController {
  constructor(private conta: ContaModel, private view: ContaView) {}

  depositar(valor: number) {
    this.conta.depositar(valor);
    this.view.exibirSaldo(this.conta);
  }

  sacar(valor: number) {
    this.conta.sacar(valor);
    this.view.exibirSaldo(this.conta);
  }
}

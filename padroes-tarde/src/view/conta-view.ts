import { ContaModel } from "../model/conta-model";

export class ContaView {
  exibirSaldo(conta: ContaModel) {
    console.log(`número: ${conta.numero}, saldo: ${conta.saldo}`);
  }
}

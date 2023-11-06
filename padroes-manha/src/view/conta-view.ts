import { ContaModel } from "../model/conta-model";

export class ContaView {
  exibirSaldo(conta: ContaModel) {
    console.log(`Saldo da Conta: R$ ${conta.saldo} reais.`);
  }
}

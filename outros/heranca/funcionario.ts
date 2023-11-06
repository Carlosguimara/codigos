import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa {
  constructor(nome: string, sobrenome: string, private funcao: string) {
    super(nome, sobrenome);
  }

  retornarNome_2(): string {
    return super.apresentarPessoa() + ` e trabalho como ${this.funcao}`;
  }
}

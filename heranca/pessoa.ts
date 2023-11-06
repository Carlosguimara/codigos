export class Pessoa {
  constructor(private nome: string, private sobrenome: string) {}

  retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  apresentarPessoa(): string {
    return `Meu nome é ${this.nome}`;
  }
}

export class Funcionario extends Pessoa {
  constructor(nome: string, sobrenome: string, private funcao: string) {
    super(nome, sobrenome);
  }

  apresentarPessoa(): string {
    return super.apresentarPessoa() + ` e, sou ${this.funcao}.`;
  }
}

function main() {
  const funcionario = new Funcionario("Graucia", "Lemos", "Developer Advocate");
  const pessoa = new Pessoa("Orquidea", "Barbosa");
  console.log(funcionario.apresentarPessoa());
  console.log(pessoa.apresentarPessoa());
  // console.log(funcionario.retornarNomeCompleto());
}

main();

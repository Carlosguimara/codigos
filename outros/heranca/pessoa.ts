export class Pessoa {
  constructor(private nome: string, private sobrenome: string) {}

  retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  apresentarPessoa(): string {
    return `Oi, eu sou ${this.nome}`;
  }
}

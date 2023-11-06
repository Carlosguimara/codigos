export class Funcionario {
  static contratacoes = 0;
  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string
  ) {
    Funcionario.contratacoes++;
  }
}

function main() {
  const funcionario_01 = new Funcionario("Glaucia", "Lemos", "Developer");
  const funcionario_02 = new Funcionario("Jurema", "Lemos", "Professora");
  const funcionario_03 = new Funcionario("Jurema", "Lemos", "Professora");
  console.log(Funcionario.contratacoes);
}

main();

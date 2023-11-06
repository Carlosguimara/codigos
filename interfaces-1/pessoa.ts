// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

function main() {
  function exibirNome(pessoa: Pessoa) {
    return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
    `;
  }

  const glaucia: Pessoa = {
    nome: "Glaucia",
    sobrenome: "Lemos",
    idade: 36,
  };

  console.log(exibirNome(glaucia));
}

main();

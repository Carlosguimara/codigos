// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface IPessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

export type TPessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
};

function main() {}

main();

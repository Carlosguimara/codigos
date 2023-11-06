// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface IFuncionario {
  id: number; // | string
  nome: string;
  salario: number; // | string
}
//  Sempre que precisarmos substituir uma propriedade de uma interface extendida, temos que utilizar o type Omit seguido da classe que estamos extendendo e do canmpo que queremos fazer o overwrite.
export interface IDesenvolvedor extends Omit<IFuncionario, "id" | "salario"> {
  id: string;
  salario: string;
  linguagemProgramacao: string;
}

function main() {
  const desenvolvedor: IDesenvolvedor = {
    id: "js-123",
    nome: "Glaucia Lemos",
    salario: "10k",
    linguagemProgramacao: "JavaScript",
  };

  console.log(desenvolvedor);
}

main();

/* 
  Neste exemplo, demonstraremos uma relação de agregação entre uma "Empresa" e seus "Funcionários". Os funcionários podem existir independentemente da empresa e podem trabalhar em diferentes empresas ao longo do tempo.
  
  Os funcionários podem existir de forma independente e ser associados a diferentes empresas ao longo do tempo. A empresa contém uma coleção de funcionários, mas a existência dos funcionários não depende da empresa, demonstrando uma relação de agregação.
*/
export class Funcionario {
  constructor(public nome: string, public cargo: string) {}
}

export class Empresa {
  private funcionarios: Funcionario[] = []; // Agregação: a Empresa contém Funcionários

  adicionarFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }

  listarFuncionarios() {
    console.log("Funcionários na Empresa:");
    for (const funcionario of this.funcionarios) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }
  }
}

function main() {
  const minhaEmpresa = new Empresa();
  const funcionario1 = new Funcionario("João", "Programador");
  const funcionario2 = new Funcionario("Maria", "Designer");

  minhaEmpresa.adicionarFuncionario(funcionario1);
  minhaEmpresa.adicionarFuncionario(funcionario2);

  minhaEmpresa.listarFuncionarios();
}

main();

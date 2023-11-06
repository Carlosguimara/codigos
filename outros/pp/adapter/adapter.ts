/* 
  Neste exemplo, temos a interface NewSystem que é esperada pelo novo sistema, a classe OldSystem que representa o sistema antigo com uma interface incompatível e a classe Adapter que atua como um adaptador entre o sistema antigo e o novo sistema. O adaptador implementa a interface NewSystem e utiliza a classe OldSystem para fazer a tradução e a chamada correta.

  O padrão Adapter é útil quando você precisa fazer sistemas existentes funcionarem com novos sistemas ou componentes que têm interfaces diferentes. O adaptador facilita a interoperabilidade entre sistemas com interfaces incompatíveis.
*/

// Interface esperada pelo novo sistema
export interface NewSystem {
  request(data: string): void;
}

// Classe do sistema antigo
export class OldSystem {
  send(data: string) {
    console.log(`Sistema Antigo: ${data}`);
  }
}

// Adaptador que faz o sistema antigo funcionar com a nova interface
export class Adapter implements NewSystem {
  private oldSystem: OldSystem;

  constructor(oldSystem: OldSystem) {
    this.oldSystem = oldSystem;
  }

  request(data: string) {
    this.oldSystem.send(data);
  }
}

// Novo sistema que espera a interface NewSystem
export class NewSystemClient {
  operate(newSystem: NewSystem, data: string) {
    newSystem.request(data);
  }
}

// Uso do padrão Adapter
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
const newSystemClient = new NewSystemClient();

console.log("Chamando o novo sistema através do adaptador:");
newSystemClient.operate(adapter, "Dados adaptados do sistema antigo.");

/* 
  Neste exemplo, temos a interface NewLibrary que é esperada pela nova biblioteca, a classe OldLibrary que representa a biblioteca existente com uma interface incompatível e a classe Adapter que atua como um adaptador entre a biblioteca existente e a nova biblioteca. O adaptador implementa a interface NewLibrary e utiliza a classe OldLibrary para realizar a operação correta.

  O padrão Adapter é útil quando você precisa integrar bibliotecas, serviços ou sistemas existentes em um novo contexto que espera uma interface diferente. O adaptador facilita a interação entre componentes com interfaces incompatíveis, tornando a migração e a integração mais suaves.
*/

// Interface esperada pela nova biblioteca
export interface NewLibrary {
  performOperation(): void;
}

// Classe da biblioteca existente
export class OldLibrary {
  doTask(): void {
    console.log("Old Library: Performing task.");
  }
}

// Adaptador que faz a biblioteca existente funcionar com a nova interface
export class Adapter implements NewLibrary {
  private oldLibrary: OldLibrary;

  constructor(oldLibrary: OldLibrary) {
    this.oldLibrary = oldLibrary;
  }

  performOperation(): void {
    this.oldLibrary.doTask();
  }
}

// Cliente que usa a nova biblioteca
export class NewLibraryClient {
  constructor(private newLibrary: NewLibrary) {}

  executeOperation(): void {
    this.newLibrary.performOperation();
  }
}

// Uso do padrão Adapter
const oldLibrary = new OldLibrary();
const adapter = new Adapter(oldLibrary);
const newLibraryClient = new NewLibraryClient(adapter);

console.log("Chamando a nova biblioteca através do adaptador:");
newLibraryClient.executeOperation();

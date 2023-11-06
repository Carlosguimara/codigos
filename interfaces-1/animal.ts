// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  comer(tipoComida: string): void;
}

export class Gato implements IAnimal {
  public nome: string;
  public idade: number;
  public estaVivo: boolean;

  constructor(n: string, i: number, estaVivo: boolean) {
    this.nome = n;
    this.idade = i;
    this.estaVivo = estaVivo;
  }

  comer(tipoComida: string): void {
    console.log(`O gato ${this.nome} está comendo ${tipoComida}.`);
  }
}

export class Cachorro implements IAnimal {
  public nome: string;
  public idade: number;
  public estaVivo: boolean;

  constructor(n: string, i: number, estaVivo: boolean) {
    this.nome = n;
    this.idade = i;
    this.estaVivo = estaVivo;
  }

  comer(tipoComida: string): void {
    console.log(`O cachorro ${this.nome} está comendo ${tipoComida}.`);
  }
}

function main() {
  const gato = new Gato("Totó", 10, true);
  const cachorro = new Cachorro("floquinho", 1, true);

  console.log(gato);
  console.log(cachorro);
  gato.comer("ração");
  cachorro.comer("carne");
}

main();

/* 
  Padronização: As interfaces garantem que todas as classes que implementam a interface sigam um padrão específico. Isso torna mais fácil para os desenvolvedores entenderem como usar essas classes.

  Polimorfismo: Com interfaces, você pode tratar objetos de diferentes classes que implementam a mesma interface de maneira uniforme. Isso simplifica o código e permite a flexibilidade na manipulação dos objetos.

  Reutilização: O código das classes que implementam a interface pode ser reutilizado em outros contextos. Por exemplo, se você precisar adicionar um novo tipo de animal, basta criar uma nova classe que implementa a interface existente.

  Documentação: As interfaces servem como documentação clara sobre quais métodos e propriedades uma classe deve implementar, facilitando a colaboração entre desenvolvedores.

  No geral, o uso de interfaces torna o código mais organizado, flexível e preparado para futuras expansões, especialmente quando há a necessidade de representar várias classes que compartilham um conjunto comum de características e comportamentos. 
*/

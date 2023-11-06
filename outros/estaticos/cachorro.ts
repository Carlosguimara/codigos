export type Raca = "Spitz Alemão" | "Buldogue" | "Pug" | "Yorkshire" | "Poodle";

export class Cachorro {
  static QTD_CACHORRO_VENDIDO = 0;
  constructor(public nome: string, public idade: number, public racas: Raca[]) {
    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  exibirInformacao(): void {
    console.log(`O cachorro ${this.nome} tem ${this.idade} anos.`);
  }
}

function main() {
  const cachorro_01 = new Cachorro("Pipoca", 4, ["Spitz Alemão"]);
  const cachorro_02 = new Cachorro("Farofa", 6, ["Yorkshire"]);
}

main();

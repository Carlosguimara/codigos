// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface ICachorro {
  nome: string;
}

export interface IGato {
  nome: string;
}

// A principal razão de usarmos extends em interface é para sinalizar aos desenvolvedores que os tipos que estamos combinando, estão relacionados de alguma maneira e não repetimos código.
export interface IAnimal extends ICachorro, IGato {
  idade: number;
}

function main() {
  const animal: IAnimal = {
    nome: "Farofa",
    idade: 5,
  };

  console.log(animal);
}

main();

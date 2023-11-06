// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface IAnimal {
  nome: string;
  idade: number;
  porte: string;
}

export interface ICachorro extends IAnimal {
  raca: string;
}

export interface IGalinha extends IAnimal {
  penas: boolean;
}

function main() {
  const cachorro: ICachorro = {
    nome: "Prince",
    idade: 2,
    porte: "médio",
    raca: "Spitz Alemão",
  };

  console.log(cachorro);

  const galinha: IGalinha = {
    nome: "Maggi",
    idade: 46,
    porte: "pequenina",
    penas: true,
  };

  console.log(galinha);
}

main();

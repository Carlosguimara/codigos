// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface Carro {
  readonly modelo: string;
  ano: number;
  valor?: number; // Propriedade Opcional
}

function main() {
  const carro: Carro = {
    modelo: "Fusca",
    ano: 1969,
    valor: 9600,
  };

  // error TS2540: Cannot assign to 'modelo' because it is a read-only property.
  // carro.modelo = "Fusca 2.0";

  console.log(carro);
}

main();

// Principal uso de uma Interface é definir um contrato entre classes não relacionadas

export interface Livro {
  titulo: string;
  autor: string;
  paginas?: number; // Propriedade Opcional
}

function main() {
  const livro: Livro = {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    paginas: 999,
  };

  console.log(livro);
}

main();

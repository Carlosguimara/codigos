/* 
  Neste exemplo, temos uma relação de agregação entre a "Biblioteca" e os "Livros". Os livros podem existir independentemente da biblioteca e podem ser associados a diferentes bibliotecas.
  
  Os livros podem existir de forma independente e ser associados a diferentes bibliotecas. A biblioteca contém uma coleção de livros, mas a existência dos livros não depende da biblioteca, demonstrando uma relação de agregação.
*/
export class Livro {
  constructor(public titulo: string, public autor: string) {}
}

export class Biblioteca {
  private livros: Livro[] = []; // Agregação: a Biblioteca contém Livros

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    console.log("Livros da biblioteca:");

    for (const livro of this.livros) {
      console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
    }
  }
}

function main() {
  const minhaBiblioteca = new Biblioteca();
  const livro1 = new Livro("Aprendendo TypeScript", "Autor A");
  const livro2 = new Livro("Programação Orientada a Objetos", "Autor B");

  minhaBiblioteca.adicionarLivro(livro1);
  minhaBiblioteca.adicionarLivro(livro2);

  minhaBiblioteca.listarLivros();
}

main();

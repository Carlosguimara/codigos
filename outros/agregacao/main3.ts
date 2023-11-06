/* 
  Neste exemplo, vamos criar um exemplo de agregação usando uma interface Livro e uma classe Biblioteca que contém uma coleção de objetos que implementam a interface Livro.
  
  A classe Biblioteca contém uma coleção de objetos que implementam a interface Livro. Os livros podem existir independentemente da biblioteca, e a biblioteca é apenas uma agregação de livros, demonstrando uma relação de agregação.
*/

export interface Livro {
  titulo: string;
  autor: string;
}

export class Biblioteca {
  private livros: Livro[] = [];

  addLivro(livro: Livro) {
    this.livros.push(livro);
  }

  listLivros() {
    console.log("Livros na biblioteca:");
    for (const livro of this.livros) {
      console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
    }
  }
}

export class Romance implements Livro {
  constructor(public titulo: string, public autor: string) {}
}

export class Misterio implements Livro {
  constructor(public titulo: string, public autor: string) {}
}

function main() {
  const minhaBiblioteca = new Biblioteca();
  const livro1 = new Romance("Dom Casmurro", "Machado de Assis");
  const livro2 = new Romance("1984", "George Orwell");
  const livro3 = new Misterio(
    "Assassinato no Expresso do Oriente",
    "Agatha Christie"
  );
  const livro4 = new Misterio("A Noite das Bruxas", "Agatha Christie");

  minhaBiblioteca.addLivro(livro1);
  minhaBiblioteca.addLivro(livro2);
  minhaBiblioteca.addLivro(livro3);
  minhaBiblioteca.addLivro(livro4);

  minhaBiblioteca.listLivros();
}

main();

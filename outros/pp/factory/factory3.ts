// Interface que define o produto
interface Produto {
  nome: string;
  getPreco(): number;
}

// Classes concretas que implementam o produto
class Computador implements Produto {
  nome = "Computador A";

  getPreco() {
    return 2000;
  }
}

class Servidor implements Produto {
  nome = "Servidor B";

  getPreco() {
    return 6500;
  }
}

// Factory que cria os produtos
class ProductFactory {
  createProduct(type: string): Produto {
    if (type === "A") {
      return new Computador();
    } else if (type === "B") {
      return new Servidor();
    } else {
      throw new Error("Tipo de produto desconhecido.");
    }
  }
}

// Uso do padrão Factory
const factory = new ProductFactory();

const computador = factory.createProduct("A");
console.log(`${computador.nome} - Preço: R$ ${computador.getPreco()}`);

const servidor = factory.createProduct("B");
console.log(`${servidor.nome} - Preço: R$ ${servidor.getPreco()}`);

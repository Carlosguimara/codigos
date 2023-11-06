/* 
  Neste exemplo, temos uma interface Product que define o contrato para os produtos, duas classes concretas ConcreteProductA e ConcreteProductB que implementam a interface e uma classe ProductFactory que cria os produtos com base em um tipo especificado.

  O padrão Factory é útil quando você precisa criar objetos de um conjunto de classes relacionadas sem precisar conhecer os detalhes de implementação de cada uma delas. Ele fornece uma maneira de criar objetos de forma flexível e encapsulada. Neste caso, a fábrica permite criar produtos diferentes com base em um tipo passado como argumento.
*/

// Interface que define o produto
interface Product {
  name: string;
  getPrice(): number;
}

// Classes concretas que implementam o produto
class ConcreteProductA implements Product {
  name = "Produto A";

  getPrice() {
    return 10;
  }
}

class ConcreteProductB implements Product {
  name = "Produto B";

  getPrice() {
    return 20;
  }
}

// Factory que cria os produtos
class ProductFactory {
  createProduct(type: string): Product {
    if (type === "A") {
      return new ConcreteProductA();
    } else if (type === "B") {
      return new ConcreteProductB();
    } else {
      throw new Error("Tipo de produto desconhecido.");
    }
  }
}

// Uso do padrão Factory
const factory = new ProductFactory();

const productA = factory.createProduct("A");
console.log(`${productA.name} - Preço: R$ ${productA.getPrice()}`);

const productB = factory.createProduct("B");
console.log(`${productB.name} - Preço: R$ ${productB.getPrice()}`);

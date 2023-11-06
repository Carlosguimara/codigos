/* 
  O padrão de projeto Decorator é um padrão estrutural que permite adicionar comportamentos ou responsabilidades adicionais a objetos sem a necessidade de modificar sua estrutura original. Isso é alcançado por meio da composição de objetos decoradores que envolvem o objeto original e adicionam funcionalidades extras. Aqui está um exemplo em TypeScript que demonstra o padrão Decorator:

  Neste exemplo, temos a interface Coffee que define o componente base (um café simples), a classe SimpleCoffee que implementa esse componente base e dois decoradores concretos, MilkDecorator e CreamDecorator, que adicionam funcionalidades extras ao café. 

  Ao criar um café e adicionar decoradores, podemos compor cafés com diferentes ingredientes adicionados, mantendo o código flexível e permitindo que você adicione novos decoradores facilmente sem modificar o componente base. O padrão Decorator é útil quando você precisa estender as funcionalidades de objetos de maneira dinâmica e flexível.
*/

// Interface que define o componente base
interface Coffee {
  cost(): number;
  description(): string;
}

// Classe concreta que implementa o componente base
class SimpleCoffee implements Coffee {
  cost() {
    return 5;
  }

  description() {
    return "Café simples";
  }
}

// Decorator abstrato
abstract class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    this.decoratedCoffee = coffee;
  }

  cost() {
    return this.decoratedCoffee.cost();
  }

  description() {
    return this.decoratedCoffee.description();
  }
}

// Decorator concreto que adiciona leite
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.decoratedCoffee.cost() + 2;
  }

  description() {
    return this.decoratedCoffee.description() + ", com leite";
  }
}

// Decorator concreto que adiciona creme
class CreamDecorator extends CoffeeDecorator {
  cost() {
    return this.decoratedCoffee.cost() + 3;
  }

  description() {
    return this.decoratedCoffee.description() + ", com creme";
  }
}

// Uso dos decoradores
let coffee: Coffee = new SimpleCoffee();
console.log(`Café simples: ${coffee.description()} - Preço: $${coffee.cost()}`);

coffee = new MilkDecorator(coffee);
console.log(
  `Café com leite: ${coffee.description()} - Preço: $${coffee.cost()}`
);

coffee = new CreamDecorator(coffee);
console.log(
  `Café com leite e creme: ${coffee.description()} - Preço: $${coffee.cost()}`
);

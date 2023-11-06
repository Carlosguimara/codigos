/* 
  Neste exemplo, temos uma classe base Shape que atua como um protótipo. As classes concretas, como Circle e Square, herdam do protótipo Shape e implementam o método clone para criar cópias de si mesmas.

  Quando usamos o padrão Prototype, podemos criar novos objetos (cópias) com base em objetos existentes sem criar novas instâncias do zero. Isso é útil quando você deseja evitar a complexidade da criação de objetos a partir do zero e quando a clonagem é uma abordagem mais eficiente.
*/

// Classe base que atua como protótipo
class Shape {
  type: string;

  clone(): Shape {
    const clonedShape = new Shape();
    clonedShape.type = this.type;
    return clonedShape;
  }

  draw() {
    console.log(`Desenhando um(a) ${this.type}`);
  }
}

// Classe concreta que herda do protótipo
class Circle extends Shape {
  constructor() {
    super();
    this.type = "Círculo";
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.type = "Quadrado";
  }
}

// Uso do padrão Prototype
const originalCircle = new Circle();
const clonedCircle = originalCircle.clone();

const originalSquare = new Square();
const clonedSquare = originalSquare.clone();

originalCircle.draw();
clonedCircle.draw();

originalSquare.draw();
clonedSquare.draw();

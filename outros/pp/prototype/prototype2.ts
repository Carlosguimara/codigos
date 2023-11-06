/* 
  Neste exemplo, temos a classe Person, que representa uma pessoa com nome e idade. A classe Person implementa um método clone para criar uma cópia do objeto. Após criar a instância original, clonamos o objeto e modificamos os atributos do objeto clonado. Isso demonstra que as alterações no objeto clonado não afetam o objeto original.

  O padrão Prototype é útil quando você precisa criar cópias de objetos complexos, como configurações, instâncias de objetos com estados ou qualquer outra situação em que você deseja evitar a criação de um novo objeto do zero, economizando recursos e tornando o processo de criação mais eficiente.
*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
  }

  clone(): Person {
    // Criar uma nova instância do objeto Person e copiar os atributos
    return new Person(this.name, this.age);
  }
}

// Criando uma instância original
const originalPerson = new Person("Alice", 30);
originalPerson.introduce();

// Clonando o objeto original
const clonedPerson = originalPerson.clone();

// Modificando o objeto clonado
clonedPerson.name = "Bob";
clonedPerson.age = 25;

// Verificando que as alterações não afetam o objeto original
originalPerson.introduce();
clonedPerson.introduce();

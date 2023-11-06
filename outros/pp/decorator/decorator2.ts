/* 
  Neste exemplo, temos a interface TextFormatter que define o componente base (texto simples), a classe PlainTextFormatter que implementa esse componente base e dois decoradores concretos, BoldTextDecorator e ItalicTextDecorator, que adicionam formatação ao texto.

  Você pode notar que, ao adicionar decoradores, podemos formatar o texto de várias maneiras diferentes e compor diferentes estilos de formatação. O padrão Decorator é útil quando você deseja adicionar responsabilidades de maneira dinâmica e flexível a objetos, neste caso, a formatação de texto em um editor de texto.
*/

// Interface que define o componente base
interface TextFormatter {
  format(text: string): string;
}

// Classe concreta que implementa o componente base
class PlainTextFormatter implements TextFormatter {
  format(text: string) {
    return text;
  }
}

// Decorator abstrato
abstract class TextDecorator implements TextFormatter {
  protected decoratedText: TextFormatter;

  constructor(text: TextFormatter) {
    this.decoratedText = text;
  }

  format(text: string) {
    return this.decoratedText.format(text);
  }
}

// Decorator concreto que adiciona negrito ao texto
class BoldTextDecorator extends TextDecorator {
  format(text: string) {
    return `<b>${this.decoratedText.format(text)}</b>`;
  }
}

// Decorator concreto que adiciona itálico ao texto
class ItalicTextDecorator extends TextDecorator {
  format(text: string) {
    return `<i>${this.decoratedText.format(text)}</i>`;
  }
}

// Uso dos decoradores
let text: TextFormatter = new PlainTextFormatter();
console.log("Texto simples:", text.format("Este é um texto simples."));

text = new BoldTextDecorator(text);
console.log("Texto em negrito:", text.format("Este é um texto em negrito."));

text = new ItalicTextDecorator(text);
console.log(
  "Texto em itálico e negrito:",
  text.format("Este é um texto em itálico e negrito.")
);

/* 
  Neste exemplo, temos uma interface Notifier que define o contrato para os notificadores e três classes concretas, EmailNotifier, SMSNotifier, e PushNotifier, que implementam a interface. A classe NotifierFactory cria os notificadores com base no tipo especificado.

  O padrão Factory permite criar notificadores diferentes com base no tipo passado como argumento para a fábrica, tornando o código flexível e extensível. Cada tipo de notificador pode ter sua própria lógica de envio, mas o código cliente não precisa se preocupar com os detalhes de implementação de cada notificador.
*/

// Interface que define o produto (notificador)
interface Notifier {
  send(message: string): void;
}

// Classes concretas que implementam o produto (tipos de notificadores)
class EmailNotifier implements Notifier {
  send(message: string) {
    console.log(`Enviando e-mail: ${message}`);
  }
}

class SMSNotifier implements Notifier {
  send(message: string) {
    console.log(`Enviando SMS: ${message}`);
  }
}

class PushNotifier implements Notifier {
  send(message: string) {
    console.log(`Enviando notificação push: ${message}`);
  }
}

// Factory que cria os notificadores com base no tipo
class NotifierFactory {
  createNotifier(type: string): Notifier {
    if (type === "email") {
      return new EmailNotifier();
    } else if (type === "sms") {
      return new SMSNotifier();
    } else if (type === "push") {
      return new PushNotifier();
    } else {
      throw new Error("Tipo de notificador desconhecido.");
    }
  }
}

// Uso do padrão Factory
const notifierFactory = new NotifierFactory();

const emailNotifier = notifierFactory.createNotifier("email");
emailNotifier.send("Esta é uma mensagem por e-mail.");

const smsNotifier = notifierFactory.createNotifier("sms");
smsNotifier.send("Esta é uma mensagem por SMS.");

const pushNotifier = notifierFactory.createNotifier("push");
pushNotifier.send("Esta é uma notificação push.");

import { ContaController } from "./controller/conta-controller";
import { ContaModel } from "./model/conta-model";
import { ContaView } from "./view/conta-view";

const conta1 = new ContaModel("12345-6", 1000);
const conta2 = new ContaModel("98765-4", 1500);

const view = new ContaView();

const c1 = new ContaController(conta1, view);
const c2 = new ContaController(conta2, view);

c1.depositar(150);
c2.depositar(450);

c1.sacar(75);
c2.sacar(275);

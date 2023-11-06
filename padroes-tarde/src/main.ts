import { ContaController } from "./controller/conta-controller";
import { ContaModel } from "./model/conta-model";
import { ContaView } from "./view/conta-view";

const conta1 = new ContaModel("12345-6", 1000);
const conta2 = new ContaModel("65432-1", 2000);

const view = new ContaView();

const ctrl1 = new ContaController(conta1, view);
const ctrl2 = new ContaController(conta2, view);

ctrl1.depositar(500);
ctrl2.depositar(50);

ctrl1.sacar(1000);
ctrl2.sacar(3000);

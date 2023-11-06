import { Funcionario } from "./funcionario";
import { Pessoa } from "./pessoa";

const func1 = new Funcionario("José", "Mailson", "contador");

console.log(func1.apresentarPessoa());
console.log(func1.retornarNomeCompleto());
console.log(func1.retornarNome_2());

const pessoa1 = new Pessoa("Zózimo", "Adrósimo");
console.log(pessoa1.apresentarPessoa());
console.log(pessoa1.retornarNomeCompleto());
// console.log(pessoa1.retornarNome_2());

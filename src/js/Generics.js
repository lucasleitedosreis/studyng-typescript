"use strict";
//----------------------------------------------------------------
// Generics
// Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.
// Exemplo 1
function retorno(value) {
  return value;
}
console.log(retorno("A Game").charAt(0));
// retorno<string>(a: string): string
console.log(retorno(200).toFixed());
// retorno<number>(a: number): number
//----------------------------------------------------------------
// Exemplo 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Maçã", "Uva", "Limão", "Pêra", "Acerola"];
function firstFive(lista) {
  return lista.slice(0, 5);
}
console.log(firstFive(numbers));
console.log(firstFive(frutas));
//----------------------------------------------------------------
// Exemplo 3
function notNull(arg) {
  if (arg !== null) return arg;
  else return null;
}
console.log(notNull("Lucas"));
console.log(notNull(100));
//----------------------------------------------------------------
// Exemplo 4
function tipoDado(a) {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}
tipoDado(200);
tipoDado("Escola");
//----------------------------------------------------------------
//Extends
// É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
function extractText(el) {
  return { texto: el.innerText, el };
}
const link2 = document.querySelector("a");
if (link2) {
  console.log(extractText(link2).el);
  console.log(extractText(link2));
}
//----------------------------------------------------------------
// Define que o retorno será um HTMLAnchorElement
const link3 = document.querySelector(".link");
async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}
async function handleDatas() {
  const notebook = await getData("https://api.origamid.dev/json/notebook.json");
  console.log(notebook.nome);
}

// A interface de uma função é definida durante a sua declaração.
//O c é um parâmetro opcional
//Somar
function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
console.log(somar(10, 20));
console.log(somar(10, 20, 20));

//Subtrair
const subtrair = (a: number, b: number, c?: number) => a - b - (c ? c : 0);

console.log(subtrair(5, 2));
console.log(subtrair(10, 5, 2));

//----------------------------------------------------------------
//Void
// No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.

//----------------------------------------------------------------
//Never
//O never é utilizado em casos onde a função gera um erro ou termina a aplicação.

//----------------------------------------------------------------
// Métodos
// Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno.

//----------------------------------------------------------------
// Overload
// Existem funções que retornam diferentes dados dependendo do argumento.
// Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.
// O Overload deve ser compatível com a função original.
function normalizar(value: string[]): string[];
function normalizar(value: string): string;

function normalizar(value: string | string[]): string | string[] {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else {
    return value.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar(" LUcas "));
console.log(normalizar([" LUcas ", "JAMES", "rOBErt "]));

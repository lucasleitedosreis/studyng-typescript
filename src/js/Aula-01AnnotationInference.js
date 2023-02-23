"use strict";
let produto = "livro";
let preco = 300;
//o typescript consegue identificar o tipo de dado de expressões em JavaScript.
//Sempre que ele conseguir inferir, você não precisa fazer fazer a anotação de dado
const carro = {
    marca: "Audi",
    portas: 4,
};
const barato = preco < 200 ? true : "produto caro";
console.log(barato);
function somar(a, b) {
    return a + b;
}
console.log(somar(4, 8));
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//EXERCÍCIO - 1-------------------------------------------------------------
//Conserte a função com TypeScript
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("Lucas "));
//EXERCÍCIO - 2-------------------------------------------------------------
//Conserte a função com TypeScript
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}

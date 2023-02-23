"use strict";
// Instanceof
// Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herdado) de uma função construtora (class).
class Produtos {
    name;
    preco;
    constructor(name, preco) {
        this.name = name;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
// const DadosLivro = new Produtos("Thor", 218);
// console.log(DadosLivro.name, DadosLivro.preco);
// console.log(DadosLivro.precoReal());
// verifica se DadosLivro é um objeto do tipo livraria
// console.log(DadosLivro instanceof Produtos);
//----------------------------------------------------------------
class Livro extends Produtos {
    autor;
    constructor(name, preco, autor) {
        super(name, preco);
        this.autor = autor;
    }
}
class Jogo extends Produtos {
    jogadores;
    constructor(name, preco, jogadores) {
        super(name, preco);
        this.jogadores = jogadores;
    }
}
function fazerPesquisa(busca) {
    if (busca === "Titanic") {
        return new Livro("O Hobbit", 210, "J. R. R. Tolkien");
    }
    if (busca === "Call of Duty") {
        return new Jogo("Call of Duty", 320, 10);
    }
    return null;
}
const produto1 = fazerPesquisa("Call of Duty");
const produto2 = fazerPesquisa("Titanic");
if (produto1 instanceof Jogo) {
    console.log(produto1.preco);
}
if (produto2 instanceof Livro) {
    console.log(produto2.autor);
}
//----------------------------------------------------------------
//Exercicio
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById("origamid");
console.dir(link3);
if (link3 instanceof HTMLAnchorElement) {
    link3.href = link3.href.replace("http://", "https://");
}

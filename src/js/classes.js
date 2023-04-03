"use strict";
// Classes
// As classes/funções construtoras são responsáveis pela construção
// de objetos que já vimos, como MouseEvent, HTMLElement e os demais.
class Loja {
    tipo = "produto";
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
const ferramentas = new Loja("O Senhor dos Anéis", 200);
console.log(ferramentas.nome);
//----------------------------------------------------------------
// Modificadores
// O TypeScript fornece diversas palavras-chave (Modifiers)
// que podem ser utilizadas em propriedades de classes modificar o comportamento/uso das mesmas.
class Product {
    // public: é o padrão de qualquer uma
    // private: só pode ser acessada dentro da classe
    type = "produto";
    // protected: só pode ser acessada dentro da classe e subclasses
    preco;
    // readonly: só permite leitura
    name;
    constructor(name, preco) {
        this.name = name;
        this.type;
        this.preco = preco;
    }
    getTipo() {
        return this.type;
    }
    getPreco() {
        return Product.transformarPreco(this.preco);
    }
    // [javascript] static: não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const book = new Product("O Senhor dos Aneis", 200);
console.log(book.getTipo());
console.log(book.getPreco());
console.log(book.name);
console.log(Product.transformarPreco(100));
//----------------------------------------------------------------
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});

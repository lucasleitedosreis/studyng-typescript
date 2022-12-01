"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
  </div>`;
}
const computador = {
    nome: "Lenovo",
    preco: 190,
    teclado: false,
};
preencherDados({
    nome: "Sony",
    preco: 200,
    teclado: false,
});
preencherDados({
    nome: "Acer",
    preco: 250,
    teclado: true,
});
function buscarCategorias(categoria) {
    if (categoria === "design") {
        console.log("Categoria design");
    }
}
const fullName = "Lucas";

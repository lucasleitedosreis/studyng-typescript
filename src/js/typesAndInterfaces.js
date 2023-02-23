"use strict";
//----------------------------------------------------------------
//Types
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
//----------------------------------------------------------------
//Exercício
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
      <p>${data.garantia}</p>
      <p>${data.seguroAcidentes}</p>

    </div>
  `;
}

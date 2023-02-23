//----------------------------------------------------------------
//Types

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};
function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
  </div>`;
}
const computador: Produto = {
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

type Categorias = "design" | "codigo" | "web";

function buscarCategorias(categoria: Categorias) {
  if (categoria === "design") {
    console.log("Categoria design");
  }
}
const fullName: string = "Lucas";

//----------------------------------------------------------------
//Interfaces
interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

//----------------------------------------------------------------
//Exercício

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();
interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}
interface Poduct {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Poduct) {
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

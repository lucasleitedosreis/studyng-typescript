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

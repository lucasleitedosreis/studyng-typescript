// Duck Typing
// Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.

interface Itens {
  nome: string;
  quantidade: number;
}

const itens1 = {
  nome: "notebook",
  quantidade: 10,
};

function showItens(iten: Itens) {
  console.log(iten.quantidade);
}

showItens(itens1);

//----------------------------------------------------------------
// Partial
// O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos.

// Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
const itens2 = {
  nome: "Notebook",
  quantidade: 10,
  cor: "azul",
};

const itens3 = {
  nome: "Geladeira",
  quantidade: 4,
  freezer: true,
};

const itens4 = {
  nome: "Instalação",
};

function mostrarQuantidade(itens: Partial<Itens>) {
  // erro, quantidade pode ser undefined
  if (itens.quantidade) {
    console.log(itens.quantidade + 20);
  }
}

mostrarQuantidade(itens2);
mostrarQuantidade(itens3);
mostrarQuantidade(itens4);

//----------------------------------------------------------------
// [key: string]: unknown;
// Podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente.

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: "Como aprender HTML",
  visualizacoes: 3000,
  tags: ["Front End", "HTML"],
  autor: "André",
};

// artigo.autor;
// artigo.descricao;

function handlePost(post: Post) {
  document.body.innerHTML += `${post.autor}`;
}

handlePost(artigo);

//----------------------------------------------------------------
// Record
// O Record define a interface de um Objeto que possui <chave, tipo>.
// Pode ser usado para definir a interface de um Objeto Literal genérico.

type ObjetoLiteral1 = {
  [key: string]: unknown;
};

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
  titulo: "André",
});

// Destructuring
// Durante a desestruturação de objetos, podemos indicar o tipo de dado com a
// sintaxe: { key1, key2 }: { key1: type1; key2: type2; }

const { body } = document;

function handleProduto({ nome, preco }: { nome: string; preco: number }) {
  nome.includes("livro");
  preco.toFixed();
}

handleProduto({
  nome: "livro",
  preco: 68,
});

//----------------------------------------------------------------
interface Produto2 {
  nome: string;
  preco: number;
}

function handleProduto2({ nome, preco }: Produto2) {
  nome.includes("livro");
  preco.toFixed();
}

handleProduto2({
  nome: "livro",
  preco: 68,
});

//----------------------------------------------------------------

// Conhecer os Dados
// Durante a desestruturação é necessário indicar o tipo exato do
// dado esperado pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null.

function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick);

//----------------------------------------------------------------
// ...rest
// O operador ...rest retorna uma Array.

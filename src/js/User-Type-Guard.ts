// Array
// Uma array não pode ser verificada com o typeof pois a mesma é um object. Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().

async function fetchCursosOnline() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursosOnline();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log("Verificação con instanceof: É uma instância de Array");
  }
  if (Array.isArray(data)) {
    console.log("Verificação con isArray: É uma instância de Array");
  }
}

//----------------------------------------------------------------
// Type Predicate
// TypeScript não executa JavaScript

// Sabemos já que o TS não executa o JS durante a checagem dos tipos. Se isso ocorre, então como a função isArray consegue ser usada como Type Guard?

// Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function handleData(data: unknown) {
  if (isString(data)) {
    data.toUpperCase();
  }
}

handleData("Origamid");
handleData(200);

//----------------------------------------------------------------
//Objetos
// O Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleProdutos(json);
}
fetchProduto();

interface Produtos {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produtos {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "preco" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProdutos(data: unknown) {
  console.log(data);
}

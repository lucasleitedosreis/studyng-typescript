//Null é um tipo primitivo que reperesenta a ausência de valor
//Undefined representa variáveis/propriedades que foram instanciadas,
// porém os seu valores ainda não foram definidos

//----------------------------------------------------------------
// Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional,
// elas poderão sempre retornar como o valor definido ou undefined.

interface Product {
  nome?: string;
}

const livro: Product = {};
const jogo: Product = {
  nome: "Ragnarok",
};

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();

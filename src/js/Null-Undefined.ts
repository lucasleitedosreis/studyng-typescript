//Null é um tipo primitivo que reperesenta a ausência de valor
//Undefined representa variáveis/propriedades que foram instanciadas,
// porém os seu valores ainda não foram definidos

//----------------------------------------------------------------
// Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional,
// elas poderão sempre retornar como o valor definido ou undefined.

interface Products {
  nome?: string;
}

const livros: Products = {};
const jogos: Products = {
  nome: "Ragnarok",
};

jogos.nome?.toLowerCase();
livros.nome?.toLowerCase();

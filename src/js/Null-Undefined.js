"use strict";
//Null é um tipo primitivo que reperesenta a ausência de valor
//Undefined representa variáveis/propriedades que foram instanciadas,
// porém os seu valores ainda não foram definidos
const livro = {};
const jogo = {
    nome: "Ragnarok",
};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();

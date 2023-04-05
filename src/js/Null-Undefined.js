"use strict";
//Null é um tipo primitivo que reperesenta a ausência de valor
//Undefined representa variáveis/propriedades que foram instanciadas,
// porém os seu valores ainda não foram definidos
const livros = {};
const jogos = {
    nome: "Ragnarok",
};
jogos.nome?.toLowerCase();
livros.nome?.toLowerCase();

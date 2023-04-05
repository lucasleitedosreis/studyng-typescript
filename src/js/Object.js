"use strict";
// Duck Typing
// Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.
const itens1 = {
    nome: "notebook",
    quantidade: 10,
};
function showItens(iten) {
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
function mostrarQuantidade(itens) {
    // erro, quantidade pode ser undefined
    if (itens.quantidade) {
        console.log(itens.quantidade + 20);
    }
}
mostrarQuantidade(itens2);
mostrarQuantidade(itens3);
mostrarQuantidade(itens4);
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["Front End", "HTML"],
    autor: "André",
};
// artigo.autor;
// artigo.descricao;
function handlePost(post) {
    document.body.innerHTML += `${post.autor}`;
}
handlePost(artigo);
function mostrarTitulo(obj) {
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

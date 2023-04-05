"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    somarVendas(data);
}
fetchVendas();
//----------------------------------------------------------------
//Soma 1
function somarVendas(vendas) {
    let total1 = 0;
    for (let value of vendas) {
        total1 += value[1];
    }
    console.log(total1);
    //----------------------------------------------------------------
    //Soma 2
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    console.log(total2);
}

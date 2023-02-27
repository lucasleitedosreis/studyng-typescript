"use strict";
// A interface de uma função é definida durante a sua declaração.
//O c é um parâmetro opcional
//Somar
function sum3(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(sum3(10, 20));
console.log(sum3(10, 20, 20));
//Subtrair
const subtrair = (a, b, c) => a - b - (c ? c : 0);
console.log(subtrair(5, 2));
console.log(subtrair(10, 5, 2));
function normalizar(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else {
        return value.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" LUcas "));
console.log(normalizar([" LUcas ", "JAMES", "rOBErt "]));
function $(seletor) {
    return document.querySelector(seletor);
}
function arredondarValor(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        const num = Math.ceil(Number(value)).toString();
        return num.toString();
    }
}
console.log(arredondarValor("30"));
console.log(arredondarValor(20));

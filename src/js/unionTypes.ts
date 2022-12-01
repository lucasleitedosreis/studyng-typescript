//É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra veretical string| number
let result: string | number = 200;
result = "poder ser number ou string";
function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber(20));

function toNumber(value: string | number) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw Error("Value deve ser um number | string");
  }
}
console.log(toNumber("10"));

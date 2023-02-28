// Unknown
// Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida.

function typeGuard(value: unknown) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard("Origamid");
typeGuard(200);
typeGuard(document.body);

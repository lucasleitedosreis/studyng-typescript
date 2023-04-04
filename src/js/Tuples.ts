// Tuples são arrays que possuem dados em posições fixas.

const produto3: (string | number)[] = ["Notebook", 2500];
const produto4: [string, number] = ["Notebook", 2500];

const nome1 = produto3[0]; // string | number
const nome2 = produto4[0]; // string

const [nome, valor] = produto4;

// as const
// Torna um dado readonly e infere o tipo de dado mais específico possível.
// Em métodos que retornam Array's, as mesmas são transformadas em Tuples.

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button = getText("button");

if (button) {
  //   const [buttonElement, buttonText] = button;
}

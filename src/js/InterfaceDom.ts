const links = document.querySelectorAll(".link");

// links.forEach((link) => {
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link.href);
//   }
// });

//----------------------------------------------------------------
// Exercício
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.

function modificarElementos(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "1px solid black";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    modificarElementos(link);
  }
});

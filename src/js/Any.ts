// Any
//O Any indica que o dado pode conter qualquer tipo de dado do TYPESCRIPT
//Devemos evitar ao máximo seu uso, pois remove toda segurança e conveniências que o TS fornece

function normalizar1(texto: any) {
  return texto.trim().toLowerCase();
}
//não vai mostrar o erro
// console.log(normalizar(10));

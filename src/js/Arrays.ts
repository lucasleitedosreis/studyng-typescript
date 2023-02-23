//Arrays somente number
const numeros = [10, 20, 30, 40, 50, 3];

function maiorQue10(data: number[]) {
  return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros));

//----------------------------------------------------------------
// Arrays com number e string
const valores = [10, 20, "taxa", 30, 40, "peso", 50, "produto", 3];

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "string");
}
console.log(filtrarValores(valores));

//----------------------------------------------------------------
//Array dentro de array
//(string | number)[][]

const dados = [
  ["Senhor dos Anéis", 80],
  ["A Guerra dos Tronos", 120],
];

//----------------------------------------------------------------
//Sintaxe Alternativa com tipos genéricos
//data: Array<number>
const salarios = [850, 915, 1520, 1915, 2130];
function salarioMenorQue1000(data: Array<number>) {
  return data.filter((salario) => salario < 1000);
}
console.log(salarioMenorQue1000(salarios));

//----------------------------------------------------------------
// Exercício

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  idAulas: number[];
  tags: string[];
  nivel: "iniciante" | "avancado";
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }
    document.body.innerHTML += `
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Aulas: ${curso.idAulas.join(", ")}</p>

        `;
  });
}

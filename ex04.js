// Temos a lista de alunos com suas notas:

// const alunos = [
//   { nome: 'Ana', notas: [7, 8, 9] },
//   { nome: 'Pedro', notas: [5, 6, 7] },
//   { nome: 'Maria', notas: [9, 8, 10] },
//   { nome: 'João', notas: [6, 7, 8] },
//   { nome: 'Lucas', notas: [8, 9, 7] },
//   { nome: 'Julia', notas: [10, 8, 9] }
// ]

// Utilize o método `map` para criar um novo objeto com o nome e a média de cada aluno.

// A média deve ser calculada utilizando o método `reduce` para somar as notas e dividi-las pelo número de notas.

// Obs: Utilize `for` ou algum método de array.

// --------------------------------------------------------------------------

const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

const mediaAlunos = alunos.map((aluno) => {
  const total = aluno.notas.reduce((total, nota) => total + nota, 0);

  return {
    nome: aluno.nome,
    media: total / aluno.notas.length,
  };
});

console.log(mediaAlunos);

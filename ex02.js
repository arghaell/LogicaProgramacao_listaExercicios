// Temos a lista de empregados com seus respectivos nomes e salários:

// const empregados = [
//   { nome: 'João', salario: 1200 },
//   { nome: 'Maria', salario: 1500 },
//   { nome: 'Pedro', salario: 1800 },
//   { nome: 'Ana', salario: 1400 },
//   { nome: 'Carlos', salario: 2000 }
// ]

// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

// Obs: Pode utilizar o `for` .

// --------------------------------------------------------------------------

const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

// >=1500

let salarioMaiorIgual1500 = empregados.some(
  (funcionario) => funcionario.salario >= 1500
);

if (salarioMaiorIgual1500) {
  let funcionario = empregados.find(
    (funcionario) => funcionario.salario >= 1500
  );
  console.log(
    "Pelo menos um empregado tem um salário maior ou igual a R$1.500,00."
  );
} else {
  console.log("Nenhum empregado tem salário maior ou igual a R$1.500,00");
}

// <=1000

let salarioMenorIgual1000 = empregados.some(
  (funcionario) => funcionario.salario <= 1000
);

if (salarioMenorIgual1000) {
  let funcionario = empregados.find(
    (funcionario) => funcionario.salario <= 1000
  );
  console.log(
    "Pelo menos um empregado tem salário menor ou igual a R$1.000,00."
  );
} else {
  console.log("Nenhum empregado tem salário menor ou igual a R$1.000,00");
}

// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.

// Sendo que:

// fruta → banana, maçã, abacaxi, melancia, laranja, limão.

// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.

// verdura → alface, espinafre, rúcula, couve, agrião, acelga.

// --------------------------------------------------------------------------

const hortifrutis = [
  "banana",
  "agrião",
  "maçã",
  "abacaxi",
  "melancia",
  "laranja",
  "limão",
  "cenoura",
  "melancia",
  "batata",
  "brócolis",
  "abóbora",
  "tomate",
  "alho-poró",
  "alface",
  "espinafre",
  "rúcula",
  "couve",
  "acelga",
  "maçã",
  "batata",
];

const frutas = ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"];

const legumes = [
  "cenoura",
  "batata",
  "brócolis",
  "abóbora",
  "tomate",
  "alho-poró",
];

const verduras = ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"];

const total = (hortifrutis) => {
  return hortifrutis.reduce(
    (acc, hortifruti) => {
      if (frutas.includes(hortifruti)) {
        acc.frutas++;
      }

      if (legumes.includes(hortifruti)) {
        acc.legumes++;
      }

      if (verduras.includes(hortifruti)) {
        acc.verduras++;
      }

      return acc;
    },

    {
      frutas: 0,
      legumes: 0,
      verduras: 0,
    }
  );
};

console.log(total(hortifrutis));

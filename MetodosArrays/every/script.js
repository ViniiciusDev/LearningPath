// O método every() testa se todos os elementos do array passam na condição e retona um valor booleano.

// Exemplo Array idades.
const ages = [32, 33, 16, 40];

// Verificando se todas as idades são maiores que 18.
const result = ages.every((age) => age >= 18)
console.log(result); // false

// Retorna true somente se todos passam na condição.
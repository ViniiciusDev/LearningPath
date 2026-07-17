// O método some() testa se ao menos um dos elementos do array passa na condição e retorna um boolean.

const ages = [3, 10, 18, 20];

const result = ages.some((age) => age < 18)
console.log(result); // true, pois há elementos menores que 18
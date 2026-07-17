// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrario, undefined é retornado.

const values = [5, 12, 8, 130, 44];

// retorna o primeiro elemento que o valor é maior que 10 
const found = values.find((value) => value > 10)
console.log(found); // 12 -> Primeiro valor maior que 10

// Exemplo com objetos
const fruits = [
    { name: 'apple', quantity: 2 },
    { name: 'banana', quantity: 0 },
    { name: 'cherry', quantity: 5 }
]

const result = fruits.find((fruit) => fruit.name === 'banana')
console.log(result); // { name: 'banana', quantity: 0 }
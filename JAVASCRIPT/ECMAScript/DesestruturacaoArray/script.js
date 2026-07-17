// Destructuring assignment (Desestruturação de arrays) permite extrair dados de arrays ou objetos em variáveis distintas.

// A posição na desestruturação corresponde à posição dos elementos no array original.
const data = ['Alice', 'alice@email.com'];

// Desestruturando o array
const [name, email] = data;
console.log(name);  // Output: Alice
console.log(email); // Output: alice@email.com

const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// Desestruturar somente o primeiro elemento
const [apple] = fruits;
console.log(apple); // Output: Apple

// Ignorando o primeiro elemento na desesstruturação
const [_, banana] = fruits;
console.log(banana); // Output: Banana

// ignorando o primeiro e o segundo
const [, , cherry] = fruits;
console.log(cherry); // Output: Cherry
const address1 = {
    street: "AV. Brasil",
    number: 20
}

// Isso não é uma copia, mas uma reeferencia ao mesmo objeto
// const address2 = address1
// address2.number = 25 // Dessa forma irá alterar os dois objetos


// Aqui estamos criando um novo objeto, com as mesmas propriedades do address1
const address2 = { ...address1 } // Dessa forma criamos uma copia do objeto
address2.number = 25 // Dessa forma só altera o address2

// Outra forma de criar uma copia de um objeto
const address3 = { ...address1, number: 30 } // Dessa forma criamos uma copia do objeto e alteramos a propriedade number


console.log(address1);
console.log(address2);
console.log(address3);

// Exemplo com arrays
const list1 = ["Maçã", "Banana", "Laranja"]
const list2 = list1 // Referencia ao mesmo array
const list3 = [...list1] // Cópia do array
const list4 = [...list1, "Mamão"] // Cópia do array com um novo elemento

list3.push("Uva")

console.log(list1, list3, list4);

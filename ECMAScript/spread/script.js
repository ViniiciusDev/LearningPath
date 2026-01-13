// Spread ( Espalhar ) permite que um objeto iterável, como uma ex´ressão de array ou uma string seja expandido para ser usado onde são esperados zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais).

const numbers = [1, 2, 3];
console.log(numbers);

console.log(...numbers); // Saída: 1 2 3

const data = [
    {
        name: 'John',
        email: 'john@example.com',
        avartar: 'image1.png'
    },
    {
        name: 'Jane',
        email: 'jane@example.com',
        avatar: 'image2.png'
    }
]

console.log(data);
console.log(...data);

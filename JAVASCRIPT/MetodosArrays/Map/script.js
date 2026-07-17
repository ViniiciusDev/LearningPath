// O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base noos retornos de cada chamada. E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor", "Gabinete"];

// Percorro os itens do Array. 
// Coloco na chaves quando quero fazer mais de uma operação dentro da função.
// Item pode ser substituído por qualquer nome que eu queira. products = product.
products.map((item) => {
    console.log(item);
})

// Sintaxe reduzida.
products.map(item => console.log(item));

// Exemplo prático - Maiusculo
const formatted = products.map((product) => {
    // return product.toUpperCase();
    return {
        id: Math.random(),
        description: product
    }
})
console.log(formatted);
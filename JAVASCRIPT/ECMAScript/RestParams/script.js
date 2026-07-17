// Rest params(...) permite representar um número indefinido de argumentos como um array

// Podemos chamar de (...rest), mas o nome pode ser qualquer um (...args)

function values(...rest) {
    // Mostra a quantidade de parâmetros passados
    console.log(rest.length); // 5

    // Exibe o conteúdo do array
    console.log(...rest); // 1, 2, 3, 4, 5

    // Exibe o conteúdo do rest que é um array 
    console.log(rest); // [1, 2, 3, 4, 5]
}

values(1, 2, 3, 4, 5);
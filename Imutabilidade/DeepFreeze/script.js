const book = {
    title: "JavaScript: The Good Parts",
    category: "Javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com"
    }
}

Object.freeze(book);
book.category = "Programming"; // Protege o primeiro nível do objeto.
book.author.name = "Dan"; // Não protege níveis mais profundos.
console.log(book);


function deepFreeze(object) {
    // Obtem um array com todas as propriedades do objeto.
    const props = Reflect.ownKeys(object);

    // Itera sobre todas as propriedades do objeto.
    for (const prop of props) {
        // obtem o valor associado à propriedade.
        const value = object[prop];

        // Verifica se o valor é um objeto ou função. 
        if (value && typeof value === "Object" || typeof value === "function") {
            deepFreeze(value);
        }
    }
}

deepFreeze(book);

book.category = "HTML"; // Não tem efeito.
book.author.name = "Dan"; // Não tem efeito.
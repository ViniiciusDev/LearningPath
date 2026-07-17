// Shallow Freezing Congela o objeto para que suas propriedades não possam ser alteradas, mas não afeta objetos aninhados.

const book = {
    title: "Objetos Imutáveis",
    category: "Programação",
    author: {
        name: "Ana Silva",
        email: "ana.silva@email.com"
    },
}

// O javascript em si não impõe restrições à modificação de objetos,
book.category = "HTML"
Object.freeze(book)
book.category = "JavaScript" // Esta modificação será ignorada

// O object.freez não impede modificações profundas em objeto aninhaos.
book.author.name = "Maria Souza" // Esta modificação será permitida

console.log(book);

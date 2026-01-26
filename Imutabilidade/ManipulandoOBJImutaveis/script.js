const book = {
    title: "Objetos Imutaveis",
    category: "Javascript",
    author: {
        name: "João Silva",
        email: "joao.silva@example.com"
    }
}

// Original 
console.log(book);


const updatedBook = {
    ...book,
    title: "Objetos Imutaveis - Edição Atualizada",
    category: "Programação Javascript",
    type: "programming"
}

// Modificado
console.log(updatedBook);


// Utilizando operador de desestruturação ( rest operator ) para remover propriedades.

const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory);

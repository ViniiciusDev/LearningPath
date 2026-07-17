let person = {
    name: 'Vinicius',
    surname: 'Gomes',
    email: 'vinicius@email.com'
}

// Estrutura.
for (let property in person) {
    // Exibe o nome da propriedade
    console.log(property);
    // Exibe o conteúdo da propriedade.
    console.log(person[property]);


}
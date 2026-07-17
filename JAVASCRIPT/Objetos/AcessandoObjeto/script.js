const user = {
    email: "vinicius@email.com",
    age: 18,
    name: {
        first_name: "Vinicius",
        surname: "Gomes"
    },
    address: {
        street: "Rua Gonçalves",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123",
    },
    message: function () {
        console.log("Oi Vinicius");
    }
}

// Acessando propriedades e métodos, usando a notação de ponto.
console.log(user.email)
// Acessando propriedades aninhadas.
console.log(user.name.first_name);
// Acessando um método dentro do objeto.
user.message()

// Acessando propriedades e métodos, usando a notação de colchetes
console.log(user["email"]);

// Acessando propriedades aninhadas
console.log(user["name"]["first_name"]);

// Acessando um método
user["message"]();


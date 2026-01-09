const user = {
    id: 1,
    name: "Vinicius",
    address: {
        street: "Avenida Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.808,
            longitude: 17.5674,
        },
    },
    message: function () {
        console.log(`Olá, ${this.name}!`);

    },
}

console.log(user?.address?.street);

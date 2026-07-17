function createProduct(name) {
    const product = {}
    product.name = name
    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }
    return product
}

// Instanciando um objeto.
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()


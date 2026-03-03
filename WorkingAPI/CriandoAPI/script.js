// Trabalhando com fetch!!
/* fetch("http://localhost:3333/products")
    .then((response) => response.json())
    .then((data) => console.log(data)) */

// Trabalhando com Async/Await
/* async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data);
}
fetchProducts() */

// Passando paramêtro para uma requisição
/* async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data);
}

fetchProductById("2") */

// Adicionar um novo produto
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) => {
    event.preventDefault()

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })

    await fetchProducts()
})
// Destructuring assignment (Desestruturação de arrays) permite extrair dados de arrays ou objetos em variáveis distintas.

// A posição na desestruturação corresponde à posição dos elementos no array original.

const product = {
    description: "Notebook",
    price: 2500,
}

const { description, price } = product;
console.log(description); // Notebook
console.log(price);       // 2500

function newProduct({ description, price }) {
    console.log("### NOVO PRODUTO ###");
    console.log(description);
    console.log(price);
}
// Uma vez desestruturado, não importa a ordem dos parâmetros.
newProduct({ description: "Mouse", price: 150 });
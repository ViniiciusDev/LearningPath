// O Método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ['Javascript', 'HTML', 'CSS', 'Python', 'Java', 'C++'];

const result = words.filter((word) => word.length > 3);
console.log(result);


const products = [
    { name: 'Notebook', price: 2500, promotion: true },
    { name: 'Mouse', price: 100, promotion: false },
    { name: 'Monitor', price: 800, promotion: true },
    { name: 'Teclado', price: 150, promotion: false },
]
// Exemplo de filtro de produtos em promoção
const promotion = products.filter((product) => product.promotion === true);
console.log(promotion);
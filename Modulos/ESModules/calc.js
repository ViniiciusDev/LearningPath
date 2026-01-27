export class Calc {
    divide(a, b) {
        return a / b
    }
}
/* export */ function sum(a, b) {
    return a + b
}

/* export */ function multiply(a, b) {
    return a * b
}
// Exemplo de função padrão. 
/* export default */ function menus(a, b) {
    return a - b
}

export { sum, multiply, menus as menusToNumber };
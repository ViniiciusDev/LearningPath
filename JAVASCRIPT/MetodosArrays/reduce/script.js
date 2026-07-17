/* O método reduce é utilizado para reduzi um array a um único valor.

    Parâmetros:
    - Array original: (values)
    - Acumulador: (accumulator) - armazena o valor acumulado das iterações.
    - valor da iteralçao (currentValue) - o valor atual sendo processado no array.
    - valor inicial (0)
    - index (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR:", accumulator);
    console.log("VALOR ATUAL:", currentValue);
    console.log("ÍNDICE DA ITERAÇÃO:", index);
    console.log("SOMA", accumulator + currentValue);
    console.log("-----");
    return accumulator + currentValue
}, 0)
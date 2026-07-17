// Função que retorna uma promise.

function asyncFunction() {
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona com setTimeout
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess) {
                resolve("Operação bem-sucedida!")
            } else {
                reject("Ocorreu um erro na operação.")
            }
        }, 2000) // A operação leva 2 segundos para ser concluída
    })
}


// Visualizando o retorno da promise
// console.log(asyncFunction());

// Irá esperar a function ser executada, e depois executar o .then()
asyncFunction().then((response) => {
    console.log("Sucesso", response);

}).catch((error) => {
    console.log("Erro", error);
}).finally(() => {
    console.log("Operação finalizada");
})
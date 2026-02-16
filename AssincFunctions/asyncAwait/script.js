function asyncFunction() {
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona com setTimeout
        setTimeout(() => {
            const isSuccess = true // Altere para true para simular uma operação bem-sucedida

            if (isSuccess) {
                resolve("Operação bem-sucedida!")
            } else {
                reject("Ocorreu um erro na operação.")
            }
        }, 2000) // A operação leva 2 segundos para ser concluída
    })
}

// Colocampos no começo da função para indicar que ela é assíncrona e que estamos trabalhado com uma promise
async function fetch() {
    // Await significa que ele irá esperar a resolução da promise antes de continuar a execução do código
    const response = await asyncFunction() // nesse caso teremos uma resposta de "Operação bem-sucedida!" ou se for false "Ocorreu um erro na operação."
    console.log(response)
}

// Sem o async o await não funcionaria, pois ele só pode ser usado dentro de funções assíncronas

// Utilizando com o try/catch
async function fetchTryCatch() {
    try {
        const response = await asyncFunction()
        console.log("Successo: ", response)
    } catch (error) {
        console.error("Erro: ", error)
    } finally {
        console.log("Operação finalizada.")
    }
}


fetch()
fetchTryCatch()
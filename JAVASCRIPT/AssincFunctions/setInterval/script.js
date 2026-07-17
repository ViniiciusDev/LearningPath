// setInterval() executa uma função repetidamente, com um intervalo de tempo fixo entre cada chamada.

let value = 10

const interval = setInterval(() => {
    console.log(value)
    value--

    if (value === 0) {
        console.log("FELIZ ANO NOVO");
        clearInterval(interval) // Para a execução repetida quando value chegar a 0
    }
}, 1000) // A função será executada a cada 1000 milissegundos (1 segundo)
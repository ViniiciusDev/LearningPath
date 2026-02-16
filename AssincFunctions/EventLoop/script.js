// (1) Executa o código de forma síncrona, sendo impresso imediatamente.
console.log(1)
// (3) Microtasks são executadas antes de temporizadores e promises.
queueMicrotask(() => {
    console.log(2)
})
// (5) Macrotask que aguarda o evento de temporizador ser acionado.
setTimeout(() => {
    console.log(3)
}, 1000)

// (2) Execução síncrona.
console.log(4)
// (4) Adiciona uma microtask quando é resolvida.
Promise.resolve(true).then(() => {
    console.log(5)
})
import http from "node:http"

const server = http.createServer(async (request, response) => {
    // Desestruturar o proprio método
    const { method, url } = request

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos")
    }

    if (method === "POST" && url === "/products") {
        // Creating Buffer
        const buffers = []

        // Ciclo for com await.
        for await (const chunk of request) {
            buffers.push(chunk)
        }
        // console.log(buffers)
        // Um modo "Rustico" para obter o body da nossa requisição. 
        console.log(Buffer.concat(buffers).toString())

        return response.writeHead(201).end("Produto Criado com Successo!")
    }

    return response.writeHead(404).end("Rota não encontrada!")
})
server.listen(3333)
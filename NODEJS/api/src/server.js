import http from "node:http"

const server = http.createServer((request, response) => {
    // Desestruturar o proprio método
    const { method, url } = request

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos")
    }

    if (method === "POST" && url === "/products") {
        return response.writeHead(201).end("Produto Criado com Successo!")
    }

    return response.writeHead(404).end("Rota não encontrada!")
})
server.listen(3333)
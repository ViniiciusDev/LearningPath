import http from "node:http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"

const server = http.createServer(async (request, response) => {
    // Desestruturar o proprio método
    const { method, url } = request

    // Adicionando o Middleware jsonBodyHandler
    await jsonBodyHandler(request, response)

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos")
    }

    if (method === "POST" && url === "/products") {
        /* // Creating Buffer
        const buffers = []

        // Ciclo for com await.
        for await (const chunk of request) {
            buffers.push(chunk)
        }
        // console.log(buffers)
        // Um modo "Rustico" para obter o body da nossa requisição. 
        console.log(Buffer.concat(buffers).toString()) */
        // Utilização do Middleware jsonBodyHandler
        return response.writeHead(201).end(JSON.stringify(request.body))
    }

    return response.writeHead(404).end("Rota não encontrada!")
})
server.listen(3333)
export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: (resquest, response) => {
            return response.end("Lista de Produtos!")
        }
    },

    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            return response.writterHead(201).end(JSON.stringify(request.body))
        }
    }
]
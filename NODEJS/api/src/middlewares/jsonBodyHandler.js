export async function jsonBodyHandler(request, response) {
    // Adiciona cada chunk;
    const buffers = []

    // Coleta os chunks de dados da requisição
    for await (const chunk of request) {
        buffers.push(chunk)
    }

    // Tratamento de exceções.
    try {
        // Concatena os chunks e converte para String. Em seguida, converte a String para JSON.
        // Usado o request.body, porque o middleware tem acesso completo ao conteúdo da request.
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        // Pode acontecer que as vezes dentro do body não tenha conteúdo.
        request.body = null
    }

    // O middleware pode modificar seja a request mas também o response.
    // Define o header de resposta como JSON.
    response.setHeader("Content-Type", "application/json")
}
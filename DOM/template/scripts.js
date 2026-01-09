// Obter o Title da página.
/* console.log(document.title) */

// Obter determinado elemento com base no seu ID
/* const guest = document.getElementById('guest-2')
console.log(guest) */

// Obter elemento por meio do seletor CLASS.
/* const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass) */

// Obter elementos por meio do seletor TAG.
/* const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag) */

// QuerySelector ele possibilita a seleção do elemento, especificando se queremos selecionar ele pelo id, class ou nametag
/* const guest = document.querySelector("#guest-1")
console.log(guest) */
// Retorna todos os elementos que ele encontrar no nosso documento com aquela determinada class
/* const guests = document.querySelectorAll(".guest")
console.log(guests) */

// Criamos nossa variável que queremos buscar o conteúdo.
/* const guest = document.querySelector("#guest-1") */
// Por meio do Atributo textContent, iremos pegar o conteúdo dentro do nosso elemento.
/* console.log(guest.textContent) */ // Retorna o conteúdo visível e oculto
/* console.log(guest.innerText) */ // Retorna somente o conteúdo visível
/* console.log(guest.innerHTML) */ // Retorna o HTML com o texto.

// Podemos também atribuir um novo conteúdo para o nosso elemento.
/* guest.textContent = "João" */




/* const input = document.querySelector("#name") */

// adicionamos a class
/* input.classList.add("input-error") */

// Removemos a class
/* input.classList.remove("input-error") */

// Se não tiver a class adiciona, se tiver a class remove.
/* input.classList.toggle("input-error") */

// Podemos também alterar manualmente o valor do css de um elemento.
/* const button = document.querySelector("button")
button.style.backgroundColor = "red" */




/* const guests = document.querySelector("ul") */
/* console.log(guests) */

// Novo Método que permite a criação de novos elementos.
/* const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")
const guestSurname = document.createElement("span") */
// atribui um valor ao nosso novo elemento criado.
/* guestName.textContent = "Diego"
guestSurname.textContent = "Fernandez" */
// Adiciona nosso elemento após o ultimo filho.
/* newGuest.append(guestName) */
// Adiciona nosso elemento antes do primeiro filho.
/* newGuest.prepend(guestSurname) */

// Outra forma mais simples de adicionar nossos elementos criados.
/* newGuest.appendChild(guestName) */

// Agora podemos adicionar nosso novo elemento criado dentro da nossa página.
/* guests.append(newGuest) */



/* const input = document.querySelector("input") */
// Podemos adicionar atributos.
/* input.setAttribute("disabled", true) */
// Podemos remover atributos.
/* input.removeAttribute("id") */


/* window.addEventListener("load", () => {
    console.log("A página foi carregada!");
}) */

// Observando o evento de click
/* addEventListener("click", (e) => {
    e.preventDefault()
    // Retorna todas a informações do evento.
    /* console.log(e); */

// Retorna o elemento clicado.
/* console.log(e.target) */

// Retorna o conteudo do elemento clicado.
/* console.log(e.target.textContent);

}) */



/* const ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {
    console.log(ul.scrollTop)
    if (ul.scrollTop > 300) {

        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

}) */



/* const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Você realizou submit");

} */




/* const input = document.querySelector("input") */

// Keydown - Quando uma tecla é pressionada ( captura tudo, incluindo CTRL, SHIFT, etc. )

/* input.addEventListener("keydown", (e)    =>  {
    console.log(e.key) //
}) */

// Keypress - Quando uma tecla do tipo caractere é pressionada ( letras, números, pontos, etc)
/* input.addEventListener("keypress", (e) => {
    console.log(e.key);

}) */






/* const input = document.querySelector("input")

input.addEventListener("input", () => {
    const value = input.value
    const regex = /\D+/g

/* console.log(value.match(regex)) */  // Dessa forma ele retornerá somente o texto e não os números adicionados no input. 

// Realiza um test para verificar se atende o padrão.
/*     const isValid = regex.test(value)
    console.log(isValid);

}) */




















const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    const value = input.value
    const hasNumberRegex = /\d+/g

    if (hasNumberRegex.test(value)) {
        alert("O texto contém Números. Por favor, digite corretamente.")
    } else {
        alert("Cadastro Enviado")
    }
}
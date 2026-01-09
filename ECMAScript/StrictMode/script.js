// O Strict Mode (Modo Estrito): Ativando, os erros que eram silenciosos se tornam visíveis, gerando exeções.

// Pode ser usado no escopo global
"use strict"

function showMessage() {
    // Podemos também ativar o Strict Mode no escopo de uma função
    //"use strict"
    let personName = "John Travolta" // Erro: personName não foi declarado
    console.log("Olá", personName)
}
showMessage() // Saída: Erro: personName is not defined

class Student {
    get point() {
        return 7
    }
}

let student = new Student()
student.point = 10 // Erro: Cannot set property point of #<Student> which has only a getter

function sum(a, a, c) { // Erro: Duplicate parameter name not allowed in this context
    return a + a + c
}
const result = sum(1, 3, 2)   // 3 + 3 + 2 = 8
console.log(result)
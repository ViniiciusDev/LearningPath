//Shallow Copy ( Copia superficial ): não pega os itens aninhados.

const htmlCourse = {
    course: "HTML",
    students: [{ name: "Luiz", email: "luiz@email.com" }]
}

const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
}


// Vai modificar o htmlCourse também porque students é uma referência e não uma cópia.
jsCourse.students.push({ name: "Maria", email: "maria@email.com" })

// Deep Copy ( Cópia profunda ): copia todos os itens, inclusive os aninhados.
const javaCourse = {
    ...htmlCourse,
    course: "Java",
    students: [...htmlCourse.students, { name: "Ana", email: "ana@email.com" }]
}

// Dessa forma podemos adicionar os estudadantes com  o push.
javaCourse.students.push({ name: "Pedro", email: "pedro@gmail.com" })

// Outra forma de escrita.
const pythonCourse = {
    ...htmlCourse,
    course: "Python",
}

pythonCourse.students = [
    ...htmlCourse.students,
    { name: "Carla", email: "carla@gmail.com" }
]

console.log(htmlCourse, jsCourse, javaCourse, pythonCourse);

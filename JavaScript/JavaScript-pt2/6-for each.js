/* 
    For each
*/

const students = [
    { name: "rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21},
    { name: "Bruno", age: 43},
    { name: "Carla", age: 13},
    { name: "Ana", age: 20},
    { name: "Julio", age: 26},
];

let allStudentsAge = 0

students.forEach( (student, index ) => {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do Array`)
 } )


/*students.forEach( (student, index ) => {
   allStudentsAge += student.age
} )

const averageAge = allStudentsAge / students.length

console.log(`A média dos alunos é de ${averageAge.toFixed(0)}`)*/


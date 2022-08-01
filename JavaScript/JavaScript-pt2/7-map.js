/* 
    MAP
     - Cria um novo array, a partir do array percorrido (array original)
     - Cria um nono array, com a mesma quantidade de itens do array original 
     - Aceita 3 parâmetros
        - item do array
        - index 
        - array completo               
*/

const numbers = [1,2,3,4]
const students = [
    { name: "rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21},
    { name: "Bruno", age: 43},
    { name: "Carla", age: 13},
    { name: "Ana", age: 20},
    { name: "Julio", age: 26},
];

/*const newStudents = students.map( (student) =>{ 
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }
    return newStudent
})

console.log(newStudents)*/



const double = number => number * 2
const toReais= number => `R$ ${number.toFixed(2)}`


const newArray = numbers.map(double).map(toReais)// Resumido 

    console.log(newArray)

/*const newArray1 = numbers.map( (number) =>{s
    return number * 2
})

console.log(numbers)
console.log(newArray)*/
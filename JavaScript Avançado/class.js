/* 

    CLASSES     
*/

//const person = {
//    name: "Rodolfo",
//    age: 28,
//    talk: function() {
//        console.log('Hello, my name is ${this.name}')
//    }
// }


class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age 
    }

  
  talk() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} `);
  }
}

const newPerson = new Person("Rodolfo", 28);

newPerson.talk()
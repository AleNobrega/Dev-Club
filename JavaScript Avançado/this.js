/* 

THIS 

this em ingles significa => este, esta, isto ...

No Javascript, o this faz referencia:

Node => modeule.exports
Web => window

Escopo: 
    => Global -> Quando começamos a escrever nossa aplicação.
       No contexto global, o this faz referencia ao objeto global,
       que é o objeto window no navegador de internet ou ao objeto global no Node .js.
       
    => Local -> Por exemplo, dentro de um função!
*/



const person ={
    name: "Rodolfo",
    age: 25,
    talk: function() {
        console.log(this.age)
    }
}

function myFunction(){
    console.log(this)
}

myFunction()

//person.talk()
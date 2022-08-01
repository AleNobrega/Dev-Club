/*[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, 
deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. 
Cada nota deve conter uma mensagem diferente.*/


const personOne = {
    nome: "Alessandra",
    idade: 36,
    sexo: "feminino",
    profissão: "Desempregada",
    nacionalidade: "Brasileira",
    
} 



if (personOne.idade >=18 && (personOne.nacionalidade === "Brasileiro" || personOne.nacionalidade === "Brasileira" )) {
    console.log('Voce passou no processo')
} else {
    console.log('Voce não passou no processo ')
}



const score = 10 

switch (score){
    case 0:
        console.log("Foi muito ruim")
        break;

         case 10:
            console.log("Foi muito bem")
        break;

    default:
        break;
}
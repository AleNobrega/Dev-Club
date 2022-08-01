//[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

const numbers = (numberOne, numberTwo) => {
    if(numberOne > numberTwo) console.log('O primeiro é maior')
    else console.log('O segundo é maior')
}

numbers(2,3)
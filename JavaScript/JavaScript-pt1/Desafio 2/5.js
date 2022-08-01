//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.


let alNumber = ['10', '20', '30']
let menor = alNumber[0]
let maior = alNumber[0]


for (let number of alNumber) {
    if (number < menor) {
        menor = number
    }
    if(number > maior){
        maior = number
    }
}
console.log('numero menor:', menor)
console.log('numero maior:', maior)
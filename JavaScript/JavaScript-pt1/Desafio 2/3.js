//[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO


const person = {
    name: "Alessandra",
    age: 16,
    sex: "female",
    height: 1.63,
    address: {
        street: "Angelo Mariotto",
        number: 45,
        country: "Brazil"
    }
}

if (person.address.country === 'Brasil' || person.address.country === 'Brazil') {
    console.log('A pessoa é brasileira')
} else {
    console.log('A pessoa NÃO é brasileira')
}

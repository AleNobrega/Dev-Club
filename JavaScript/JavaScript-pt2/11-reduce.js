/* 
    REDUCE
     - Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
     - Aceita 4 parâmetros para
        - acumulador
        - valor atual
        - index
        - array completo
*/

const list = [1,2,3,4];

const sum = list.reduce( (acc, current) => { 
    return acc + current
}, 0)

console.log(sum)
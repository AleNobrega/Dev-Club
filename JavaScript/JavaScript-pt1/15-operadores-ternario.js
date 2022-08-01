/*  
 OPERADOR TERNÁRIO OU CONDICIONAL 

 ? se
 : se não 
*/

const balance = true
const isNotBlocked = true
const accountExist = false

const transferOk = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

console.log(transferOk)
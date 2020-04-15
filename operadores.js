
//Operadores de comparação 

/*  >   : Maior
  <   : Menor
  >=  : Maior igual a
  <=  : Menor igual a
  ==  : Igual a
  === : Igual e do mesmo tipo de
  !=  : Diferente de 
  !== : Diferente, inclusive do tipo de
*/

//Desafio 01

const idade01 = 17

if (idade01 >= 18) {
    console.log(`Você tem ${idade01} anos. Pode entrar`)
} else {
    console.log(`Você tem ${idade01} anos. Entrada bloqueada`)
}

if (idade01 === 17) {
    console.log(`Você tem ${idade01} anos. Volte quando tiver 18!!`)   
}


//Operadores lógicos

/* && : "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.

   || : "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.

   !  : "NÂO" Nega uma condição, assim ela tem que ser falsa para que a final seja verdadeira.
*/

//Desafio 02

const idade02 = 18

if (!(idade02 >= 18) || idade02 === 17) {
    console.log(`Você tem ${idade02} anos. Entrada bloqueada`)
} else {
    console.log(`Você tem ${idade02} anos. Entrada liberada`)
}


//Operadores aritméticos

/*  * : Multiplicação
    / : Divisão
    % : Resto da divisão
    + : Adição
    - : Subtração
*/

//Desafio 03

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0
# aulajs
 Conhecendo e praticando os conceitos de JS. Desafios extras

//Variáveis:

//Criação de variáveis: const nome da variável = 'valor da variável', const diz que tal variável não aceitará nenhum outro valor além do dado para el, será constante.

/console.log exibe uma mensagem ao rodarmos o terminal. console.log(mensagem desejada)

//console.log(name)


//Variáveis string:

//Variáveis string são variáveis de tipo texto.
//Sua sintaxe é: "texto", 'texto' ou `texto`.

const name = 'Paulo Bootcamp'

//As strings com ` são chamadas de strig templates e com elas temos a possibilidade de além de adicionar um texto na variavel também podemos chamar outra variavel para a template pela sintaxe: `texto2 ${texto1}`

//Variáveis number

//Variáveis number são variáveis de tipo numero.
//Sua sintaxe é identica a string, porém sem nenhum tipo de aspas no conteudo da variavel.É possivel realizar operações matemáticas por variáveis de tipo number, pois operações não passam de números.
//const gradestudent02 = numero

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

//Operadores aritméticos

/*  * : Multiplicação
    / : Divisão
    % : Resto da divisão
    + : Adição
    - : Subtração
*/

//Servem para acionar uma ação no programa se a condição for verdadeira ou falsa

//Sintaxe: if (condição) {
//         ação
//         } else {
//            ação
//}

//Objetos: São criados igual variáveis, porém depois do = abre e fecha {} e dentro dos colchetes inserimos as propriedades e valores do objeto. Propriedade: uma característica do objeto. Valores: Valor ou funcionalidade da propriedade. Para chamarmos uma propriedade de um objeto coloca-se o nome do objeto um ponto e a propriedade desejada.

//const aluno01 = {
//    nome: 'Paulo',
//    nota: 10
//}

//Vetores/Array: São criados nno intuito de reunir mais de um valor em uma única variável para faciliatr no desenvolvimento. é criado da mesma forma que um objeto porém ao ínvez de colchetes usamos []. para acesarmos uma propriedade de um objeto dentro de um array colocamos o nome do array, entre [] a posição do objeto no array(começa do 0) e por fim adicionamos um ponto e a propriedade desejada.


//Funções são uma ação que é dispara assim que chamarmos ela. Muito utilizada para que não seja preciso repetir códigos. É escrita da segunte forma: function name da função(parámetros da função){ação}.
//Métodos: Funções que estão atreladas a um objeto, método é uma função atrelada a um objeto. objeto.função(método)

//Estrutura de repetição serve para repetir uma ação em determinadas vezes. for(let i=0; num de repet.(i< ou >); i++){ação}

// Variáveis criadas só funcionam em seu escopo de bloco em nos escopos filhos, nunca nos escopos pai.
//Boolean são variáveis que sempre terão o valor de verdadeiro ou falso

//Objetos: São criados igual variáveis, porém depois do = abre e fecha {} e dentro dos colchetes inserimos as propriedades e valores do objeto. Propriedade: uma característica do objeto. Valores: Valor ou funcionalidade da propriedade. Para chamarmos uma propriedade de um objeto coloca-se o nome do objeto um ponto e a propriedade desejada.

//const aluno01 = {
//    nome: 'Paulo',
//    nota: 10
//}

//Vetores/Array: São criados nno intuito de reunir mais de um valor em uma única variável para faciliatr no desenvolvimento. é criado da mesma forma que um objeto porém ao ínvez de colchetes usamos []. para acesarmos uma propriedade de um objeto dentro de um array colocamos o nome do array, entre [] a posição do objeto no array(começa do 0) e por fim adicionamos um ponto e a propriedade desejada.

alunos = [

    {
    nome: 'Paulo',
    nota: 10
    },

    {
        nome: 'Diego',
        nota: 9.8
    },

    {
        nome: 'Mayk',
        nota: 2
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!!`)
} else {
    console.log(`A média foi de ${media}. Estudem mais!!`)
}
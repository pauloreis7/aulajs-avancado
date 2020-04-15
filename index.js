//Variáveis:

//Criação de variáveis: const nome da variável = 'valor da variável', const diz que tal variável não aceitará nenhum outro valor além do dado para el, será constante.

const nome = 'Paulo Bootcamp'

//console.log exibe uma mensagem ao rodarmos o terminal. console.log(mensagem desejada)

//console.log(nome)


//Variáveis string:

//Variáveis string são variáveis de tipo texto.
//Sua sintaxe é: "texto", 'texto' ou `texto`.

//As strings com ` são chamadas de strig templates e com elas temos a possibilidade de além de adicionar um texto na variavel também podemos chamar outra variavel para a template pela sintaxe: `texto2 ${texto1}`

//Variáveis number

//Variáveis number são variáveis de tipo numero.
//Sua sintaxe é identica a string, porém sem nenhum tipo de aspas no conteudo da variavel.É possivel realizar operações matemáticas por variáveis de tipo number, pois operações não passam de números.
//const notaAluno02 = numero


alunosDaTurmaA = [

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
    },

    {
        nome: 'Marina',
        nota: 9.2
    }
]

alunosDaTurmaB = [

    {
    nome: 'Cleiton',
    nota: 7
    },

    {
        nome: 'Ana',
        nota: 4
    },

    {
        nome: 'Thiago',
        nota: 2.5
    },

    {
        nome: 'Afonso',
        nota: 2.5
    }
]

//Funções são uma ação que é dispara assim que chamarmos ela. Muito utilizada para que não seja preciso repetir códigos. É escrita da segunte forma: function nome da função(parámetros da função){ação}.
//Métodos: Funções que estão atreladas a um objeto, método é uma função atrelada a um objeto. objeto.função(método)

//Estrutura de repetição serve para repetir uma ação em determinadas vezes. for(let i=0; num de repet.(i< ou >); i++){ação}

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const mediaA = calculaMedia(alunosDaTurmaA)

const mediaB = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media} . Parabéns!!`)
    } else {
        console.log(`A média da turma ${turma} foi de ${media} . Estudem mais!!`)
    }
}

enviaMensagem(mediaA, 'A')
enviaMensagem(mediaB, 'B')

// Variáveis criadas só funcionam em seu escopo de bloco em nos escopos filhos, nunca nos escopos pai.
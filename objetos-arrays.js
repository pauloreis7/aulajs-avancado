
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
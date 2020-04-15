//Controle de dados da empresa Rocketseat

//Inserindo os dados

const usuario = {
    nome: 'Paulo',

    empresa :{
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',

        Endereço: {
            rua: 'Rua Guilherme Gembala',
            numero: '260'
        }
    }
}

//Imprimindo os dados em tela

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.Endereço.rua}, número ${usuario.empresa.Endereço.numero}.`)
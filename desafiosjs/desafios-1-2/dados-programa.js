//Armazenamento de dados de um programador

//inserindo os dados

const programador = {
    nome: 'Paulo',
    idade: '15',
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },

        {
            nome: 'especialidade',
            especialidade: 'Data Science'
        },

        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

//Imprimindo os dados em tela

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)
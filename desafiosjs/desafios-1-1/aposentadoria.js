
//Cálculo de aposentadoria

//Dados da pessoa

const nome = 'Henrique Souza'

const sexo = 'M'

const idade = 60

const contri = 35

//Cálculo de contribuição

const regra = idade + contri

//Calculando a possibilidade de se aposentar

const homemPode = sexo === 'M' && contri >= 35 && regra >= 95

const mulherPode = sexo === 'F' && contri >= 30 && regra >= 85

//Exibindo o resultado para a pessoa

if (homemPode || mulherPode) {
    console.log(`${nome} você possui os requisitos para se aposentar!`)
} else {
    console.log(`${nome} você não possui os requisitos para se aposentar. Cumpra o tempo necssário e tente outra vez!`)
}
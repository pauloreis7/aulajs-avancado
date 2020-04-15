//Calculo de IMC

//Dados da pessoa:

const nome = 'Douglas'

const peso = 85

const altura = 1.8

const sexo = 'Masculino'

//Calculo do IMC

const imc = peso / (altura * altura)

//Exibição das mensagens

if (imc >= 30) {
    console.log(`${nome} você está acima do peso, seu índice de massa coporal é de ${imc}. Cuide melhor da sua saúde!!`)
} else {
    console.log(`${nome} você não está acima do peso, seu índice de massa corporal é de ${imc}. Parabéns e continue assim!!`)
}
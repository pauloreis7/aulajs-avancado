//Calculo de saldo de usuário

//Inserindo os dados do usuário

const usuarios = [
    {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },

  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },

  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }

]

//calculo do saldo

function calculaSaldo (receitas, despesas) {
    const totRec = somaNumeros(receitas)
    const totDes = somaNumeros(despesas)
    
    return totRec - totDes
}

//Soma da receita e despesa

function somaNumeros(numeros) {
    let soma = 0
    
    for (let i of numeros) {
        soma = soma + i
    }

  return soma
  
}

//Exibindo a mensagem em tela

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui um saldo positivo de ${saldo}`)
    } else {
        console.log(`${usuario.nome} possui um saldo negativo de ${saldo}`)
    }
}
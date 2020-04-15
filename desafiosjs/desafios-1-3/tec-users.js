//Usuários e suas tecnologias

//Inserindo os dados

const usuarios = [
    {
        nome: 'Paulo',
        tecnologias: ["Javascript", "React"]
    },

    {
        nome: 'Jasmine',
        tecnologias: ["JavaScript", "CSS"]
    },

    {
        nome: 'Carlos',
        tecnologias: ["HTML", "Node.JS"]
    }
]

//Exibindo os usuários em tela

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

//Função para checar se o usuário usa CSS

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS' ) return true
    }
    return false
}

//Imprimindo os resultados em tela

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
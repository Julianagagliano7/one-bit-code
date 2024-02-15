function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email: ${email}`)
}
const user = {
    nome: 'juliana',
    email: 'julianagagliano1@gmail.com',
    executaFuncao: function (fn) {
        fn.call(user, this.nome, this.email)
    }
}

user.executaFuncao(exibeMensagem) 
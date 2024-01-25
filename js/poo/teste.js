const user = {
    nome: 'Ju',
    idade: 20,
    email: 'julianagagliano1@gmail.com',
    celular: '(22)992076554',
    exibirInfo: function(){
        console.log(this.nome, this.idade, this.email)
    },
    ativo: true
}

const exibe = function(){
    console.log(this.celular)
}

const exibeCelular = exibe.bind(user)
exibeCelular()
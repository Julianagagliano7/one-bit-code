function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibeInfos = function () {
        console.log(this.nome, this.email)
    }
}

const newUser = new User('juliana', 'julianagagliano1@gmail.com')

const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
}

newUser.exibeInfos() 
newUser.exibeInfos.call(outroUser) 
//new - serve para criar instâncias de objetos a partir de uma função construtora
//forma de criar objetos em JS usando um construtor

function User(nome, email) {
  this.nome = nome
  this.email = email

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`
  }
}

const novoUser = new User('Juliana', 'julianagagliano1@gmail.com')
// console.log(novoUser)
console.log(novoUser.exibirInfos())


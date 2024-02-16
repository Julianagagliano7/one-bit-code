//São aquelas que precisamos usar o "new" para criar novas instâncias de objetos

function User(nome, email) {
  this.nome = nome
  this.email = email

  this.exibeInfos = function () {
    return `${this.nome}, ${this.email}`
  }
}

const newUser = new User('juliana', 'ju')
console.log(newUser)
console.log(newUser.exibeInfos())
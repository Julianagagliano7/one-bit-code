function User(nome, email) {
  this.nome = nome
  this.email = email

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`
  }
}

function Admin(role) {
  User.call(this, 'Juliana', 'j@j.com')  //esse método serve para chamar User para que Admin possa usar suas propriedades
  this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype) //Admin vai herdar os métodos e propriedades de User
const novoUser = new Admin('admin')

console.log(novoUser.exibirInfos())
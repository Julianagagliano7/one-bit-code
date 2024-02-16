function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`
    }
  }
}

const newUser = criaUser('juliana', 'ju@gmail.com')
console.log(newUser) 
console.log(newUser.exibeInfos())
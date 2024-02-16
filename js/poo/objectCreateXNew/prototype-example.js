const user = {
  perfil: 'estudante',
  status: 'ativo'
}

const estudante = {
  nome: 'Juliana',
}

Object.setPrototypeOf(estudante, user)

console.log(estudante.perfil)
console.log(estudante.nome)

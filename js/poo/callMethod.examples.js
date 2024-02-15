// function exibeMarcas(){
//     console.log(this.marca1, this.marca2, this.marca3)
// }

// const marcas = {
//     marca1: 'Nike',
//     marca2: 'Adidas',
//     marca3: 'Puma'
// }

// exibeMarcas.call(marcas)

//Exemplo 2
// function exibeMensagem(nome, email) {
//     console.log(`usuário: ${nome}, email: ${email}`)
//    }
//     const user = {
//     nome: 'Mariana',
//     email: 'm@m.com',
//     executaFuncao: function(fn) {
//       fn.call(user, this.nome, this.email)
//     }
//    }
   
//    user.executaFuncao(exibeMensagem) 
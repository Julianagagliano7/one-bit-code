const user = {
    nome: 'Juliana',
    email: 'ju1@gmail.com',
    nascimento: '2020/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    },
    trash: function(){
        console.log('This is a trash function') 
    }
}

const admin = {
    nome: 'Mariana',
    email: 'mari1@gmail.com',
    nascimento: '2020/01/01',
    role: 'admin',
    criarCurso: function(){
        console.log('Curso criado')
    }
}

// admin vai herdar os métodos e propriedades de user
// 1º parâmetro é o objeto que vai herdar
// 2º parâmetro é o objeto fornecedor da herança
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()
admin.trash()
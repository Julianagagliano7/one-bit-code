const user = {
  name: "Juliana",
  email: "juliana@gmail.com",
  birthDate: "2020/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.name, this.email, this.birthDate, this.role, this.ativo);
  },
};

// user.exibirInfos(); 
// const exibir = user.exibirInfos //perde a referência/conexão do objeto
// exibir()


//Adicionando contexto à função com o método Bind()
const exibir = function(){
  console.log(this.name)
}
const exibirNome = exibir.bind(user); 
exibirNome(); 
exibir(); 
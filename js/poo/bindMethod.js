const user = {
    name: "Juliana",
    email: "julianagagliano1@gmail.com",
    birthDate: "2020/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function () {
      console.log(this.name, this.email, this.birthDate, this.role, this.ativo);
    },
}

const exibir = function(){
    console.log(this.role)
};

const exibirRole = exibir.bind(user);
exibirRole();
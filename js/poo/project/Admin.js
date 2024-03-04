import User from "./User.js"

class Admin extends User {
  constructor(nome, email, birthDate, role = 'admin', active = true) {
    super(nome, email, birthDate, role, active) // chama o construtor da classe pai (User)
  }

  createCourse(CourseName, vacancies) {
    return `Curso de ${CourseName} criado com ${vacancies} vagas.`
  }
}

const newAdmin = new Admin('Carlos', 'Carlos@gmail.com', '01/01/2000');
console.log(newAdmin.createCourse('Math', 10))
console.log(newAdmin.exibirInfos())



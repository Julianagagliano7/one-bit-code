import User from "./User.js"

class Faculty extends User {
  constructor(name, email, birthDate, role = 'faculty', active = true) {
    super(name, email, birthDate, role, active) // chama o construtor da classe pai (User)
  }

  approveStudent(studentName, courseName) {
    return `Aprovado(a) o aluno(a) ${studentName} no curso ${courseName}.`
  }
}

const newFaculty = new Faculty('Jonas', 'jonas@1', '01/01/2000');
console.log(newFaculty)
console.log(newFaculty.approveStudent('Maria', 'Math'))
console.log(newFaculty.exibirInfos())



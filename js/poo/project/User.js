export default class User {
  constructor(name, email, birthDate, role, active = true) {
    this.name = name
    this.email = email,
    this.birthDate = birthDate,
    this.role = role || 'student',
    this.active = active
  }

  exibirInfos() {
    return `${this.name}, ${this.email}`
  }
}


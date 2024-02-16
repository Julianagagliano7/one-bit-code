class User {
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

const newUser = new User('ju', 'ju@gmail.com', '2004/01/30')

console.log(newUser)
console.log(newUser.exibirInfos())
console.log(User.prototype.isPrototypeOf(newUser))
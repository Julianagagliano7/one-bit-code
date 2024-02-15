const person = {
    fullName: function () {
        return `${this.name} ${this.lastname}`;
    }
}

const person1 = {
    name: 'João',
    lastname: 'Silva'
}

const person2 = {
    name: 'Maria',
    lastname: 'Souza'
}

console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2))
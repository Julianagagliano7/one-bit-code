//Método que sempre espera receber um objeto para ser executado no contexto de uma função


// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Juliana",
//   lastName: "Gagliano",
// };

// const person2 = {
//   firstName: "Pedro",
//   lastName: "Sampaio",
// };

// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));

const obj = {name: "Jonh"};

let greeting = function(a, b){
  return `${a} ${this.name}. ${b}`; 
}

console.log(greeting.call(obj, "Hello", "How are you?"))
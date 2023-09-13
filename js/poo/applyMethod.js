const obj = {name: "Jonh"};

let greeting = function(){
  return `${a} ${this.name}. ${b}`
}

console.log(greeting.apply(obj, ["Hello", "How are you?"]))




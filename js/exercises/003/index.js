// Algoritmo simples que calcula a idade (usando somente recursos nativos do navegador)
// Deve imprimir nome, sobrenome, campo de estudo e idade

 function calculateAge(birthYear){
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
};

function recruitInformation(name, lastName, fieldOfStudy, currentAge){
  window.alert('Seu nome é ' + name);
  window.alert('Seu sobrenome é ' + lastName);
  window.alert('Seu campo de estudo é ' + fieldOfStudy);
  window.alert('Você tem ' + currentAge + ' anos');
}

const name = window.prompt('Digite seu nome:');
const lastName = window.prompt('Digite seu sobrenome:');
const fieldOfStudy = window.prompt('Digite seu campo de estudo:');
const birthYear = window.prompt('Digite o ano em que você nasceu:');

let currentAge = calculateAge(birthYear);
recruitInformation(name, lastName, fieldOfStudy, currentAge);  



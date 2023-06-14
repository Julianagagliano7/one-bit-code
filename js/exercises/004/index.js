// Crie um programa que permita inserir dois valores numéricos 
// Calcule as quatro operações de acordo com esses dois valores inseridos 
// Todos os resultados devem ser exibidos de uma vez na tela 

function add(num1,num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
}

function subtraction(num1,num2) {
  let decrease = 0;
  if (num1 > num2) {
    decrease = num1 - num2;
  }
  else {
     decrease = num2 - num1;
  }
  return decrease;
}

function multiplication(num1,num2){
  let multiply = 0;
  multiply = num1 * num2;
  return multiply;
}

function division(num1,num2) {
  let divide = 0;
  divide = num1/num2;
  return divide;
}

function calculate(){
  let numberOne = parseFloat(prompt('Digite o primeiro número: '));
  let numberTwo = parseFloat(prompt('Digite o segundo número: '));

  let sumResult = add(numberOne,numberTwo);
  let subResult = subtraction(numberOne, numberTwo);
  let multiplyResult = multiplication(numberOne, numberTwo);
  let divideResult = division(numberOne, numberTwo);

  alert('A soma de ' + numberOne + '+' + numberTwo + '=' + sumResult);
  alert('A subtração de ' + numberOne + '-' + numberTwo + '=' + subResult);
  alert('A multiplicação ' + numberOne + '*' + numberTwo + '=' + multiplyResult);
  alert('A divisão ' + numberOne + '/' + numberTwo + '=' + divideResult);
}

calculate();



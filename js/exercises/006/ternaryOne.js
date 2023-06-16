//Crie um operador ternário que verifique se um número é positivo, negativo ou zero e retorne a mensagem adequada.

const number = -99;

const isNumber = (number < 0) ? 'Negative' : (number > 0) ? 'Positive' : (number == 0) ? 'Zero' : 'Other'; 

console.log(isNumber);

//Observação: Você pode associar várias alternativas em relação a cada condição, mas precisa associar um valor para que todas sejam falsas também para funcionar.


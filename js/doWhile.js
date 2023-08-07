// Estrutura de Repetição que garante que o código será executado pelo menos uma vez mesmo que a condição seja falsa. 
// Verificação da condição só acontece depois que o código é rodado uma vez
// Caso a condição seja verdadeira, volta a fazer o bloco do {}

let speed = 0;

do {
  console.log('\nA velocidade do veículo é: ' + speed + ' km/h');
  speed-=20;
} while(speed > 0); 

console.log(speed); 

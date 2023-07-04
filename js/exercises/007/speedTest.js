// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
// Deve exibir o nome e a velocidade do veículo mais rápido 

function isFaster(s1,s2,c1,c2){
  let faster = (s1 > s2) ? 'Carro 1 ' + '(' + c1 + ')' + ' é mais rápido do que o carro 2 ' + '(' + c2 + ')':
  (s2 > s1) ? 'Carro 2 ' + '(' + c2 + ')' + ' é mais rápido do que o carro 1'  + '(' + c1 + ')':
  'Os dois carros têm a mesma velocidade'; 

  alert(faster);
  alert('Velocidade ' + c1 + ' = ' + s1 + ' km/h');
  alert('Velocidade ' + c2 + ' = ' + s2 + ' km/h');
}

let car1   = prompt('Digite o modelo do primeiro carro:');
let speed1 = prompt('Digite a velocidade do primeiro carro:');

let car2   = prompt('Digite o modelo do segundo carro:');
let speed2 = prompt('Digite a velocidade do segundo carro:');

let result = isFaster(speed1, speed2, car1, car2); 

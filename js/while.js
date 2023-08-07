// Estrutura de Repetição: executa o mesmo bloco de código várias vezes
// É executado enquanto uma determinada condição for verdadeira
// Deve existir sempre uma condição falsa para o looping não ficar sendo executada para sempre
// Aceita break para quebrar a repetição a qualquer momento

let speed = 100; 

while (speed > 0){
  console.log('\nThe car is ' + speed + ' /km');
  speed -= 20;
  console.log('\nSlowing down 20km/h');

  if (speed === 40){
    console.log('\nThe car reached 40km/h');
    break;
  }
}

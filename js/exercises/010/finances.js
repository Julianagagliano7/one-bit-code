let inicialAmount = parseFloat(prompt('Qual é a sua quantidade de dinheiro incial? (coloque as casas decimais)'));
let option;
let newAmount = inicialAmount; 

do {
  option = prompt("Escolha as opções 'Adicionar', 'Subtrair', 'Encerrar'").toLowerCase(); 
  switch(option){
    case 'adicionar':
      let addition = parseFloat(prompt('Quanto você deseja adicionar? (reais)'));
      newAmount += addition; 
      alert('Você tinha: ' + inicialAmount + '\nAgora você tem: ' + newAmount);
      break;
    case 'subtrair':
      let subtraction = parseFloat(prompt('Quanto você deseja subtrair? (reais)'))
      newAmount -= subtraction; 
      alert('Você tinha: ' + inicialAmount + '\nAgora você tem: ' + newAmount);
      break;
    case 'encerrar':
      alert('Você tinha: ' + inicialAmount + '\nAgora você tem: ' + newAmount);
      break;
    default:
      alert('Você não escolheu uma opção válida')
  }
} while(option !== 'encerrar')
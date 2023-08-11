let balance = parseFloat(prompt("Informe seu saldo incicial: "));
let option;

do {
  option = prompt(
    "\nSaldo Disponível R$ " +
      balance +
      "\n1. Adicionar Dinheiro" +
      "\n2. Sacar Dinheiro" +
      "\n3. Sair"
  );

  switch (option) {
    case "1":
      balance += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      balance -= parseFloat(prompt("Informe o valor a ser removido: "));
      break;
    case '3':
      alert('Você escolheu a opção de Encerramento...')
      break;
    default:
      alert('Você escolheu uma opção inválida!');
      break;
  }
} while(option !== '3');

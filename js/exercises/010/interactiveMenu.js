let option;

do {
  option = parseInt(prompt("Selecione uma opção de 1 a 5: "));
  switch (option) {
    case 1:
      console.log("Você escolheu a opção 1");
      break;
    case 2:
      console.log("Você escolheu a opção 2");
      break;
    case 3:
      console.log("Você escolheu a opção 3");
      break;
    case 4:
      console.log("Você escolheu a opção 4");
      break;
    case 5:
      alert("OPÇÃO DE ENCERRAR...ENCERRANDO PROGRAMA!")
      break;
    default:
      alert('Você não escolheu uma opção válida!')
  }
} while (option !== 5);
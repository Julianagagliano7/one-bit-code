const result = prompt("Digite 'a', 'b' ou 'c': ");

switch(result) {
  case "a":
    console.log("O resultado é 'a'");
    break;
  case "b":
    console.log("O resultado é 'b'");
    break;
  case "c":
    console.log("O resultado é 'c'");
    break;
  default:
    console.log("Finalizando...Caso padrão");
    break;
}

// Não roda porque está sem script html mas com html rodaria perfeitamente, pois a sintaxe é essa!
//Exemplo de Função Síncrona -> tudo acontece de forma sequencial

function sumNumbers() {
  let result = 1 + 1;

  if (result == 2) {
    sucessCallback();
  } else {
    errorCallback();
  }
}

function sucessCallback() {
  console.log("Yeah! Number 2!");
}

function errorCallback() {
  console.log("Something wrong!");
}

sumNumbers();

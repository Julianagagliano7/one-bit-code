let word = prompt("Digite a palavra para realizar a verificação: ");
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
   reverseWord += word[i];
}

if (word === reverseWord) {
  console.log(word + " é igual a: " + reverseWord + "\n São palíndromos!");
}
else{
  console.log(word + ' é diferente de: ' + reverseWord + '\nNão são palíndromos!')
}

//o word.length - 1 é porquê começa no 0, com o -1 pegamos o último caractere da palavra inserida
//iteramos com i-- até chegar i>=0 pois assim ele pegará até o primeiro caractere de trás para frente, armazenando a palavra ao contrário

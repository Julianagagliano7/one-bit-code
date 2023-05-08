// Operadores Aritméticos -> + , - , * , / , %
  //  * , / -> precedência sobre os demais operadores. 

let duzia = 12;
let par = 2; 

result = duzia % par;  // % -> resto da divisão inteira

console.log(result);

// Operadores de Atribuição -> = , += , -= , /= , %= 

let a = 5;

// a = a + 3  pode ser substituiído pelo modelo abaixo. 
a += 3;
console.log(a); 

a -= 2;
console.log(a);

a *= 3; 
console.log(a); 

a /= 9; 
console.log(a); 

a %= 2; 
console.log(a); 

// Operador de Incremento e Decremento 

let b = 2;

b++;
console.log(b); 

b--;
console.log(b); 

++b; 
console.log(b); 

--b; 
console.log(b); 

// Operações com Strings 

resultado = 'juliana' + ' gagliano'; 
console.log(resultado); 

soma_number_string = 1 + '1';     // tomar cuidado com a tipagem dinâmica - vira uma string (concatenação)
console.log(soma_number_string); 
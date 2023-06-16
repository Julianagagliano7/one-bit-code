// Primitive Data-Types in JS //

/*  

1. number e bigint 

2. string 

3. boolean 

4. null e undefined 

5. object 

6. symbol 

*/

// Types of Variables // 

/* 
 1. var - not recommended anymore
 2. let - recommended 
 3. const - variable whose value cannot be reassigned
*/

let nomePessoa = 'juliana'  //string//     
console.log(nomePessoa)

let idade                  //undefined// 
idade = 26                //number//
console.log(idade)
// criei a variável vazia (undefined) e depois de declarada, não precisei utilizar o var para alterar o valor para 26 - tipagem dinâmica//

let x = true             //boolean//
let y = false 
console.log(x, y)

const person = {firstName:"John", lastName:"Doe"};  //object// 
console.log(person)

/*  Symbol cria valores únicos e imutáveis, usados como identificadores. Podem ser usados como identificadores das propriedades de objetos. Cria propriedades que não podem ser modificadas inadvertidamente. */
const meuSimbolo = Symbol();
console.log(typeof meuSimbolo); // irá imprimir "symbol"


/* Principal diferença entre OBJETO e DICIONÁRIO

  objeto -> estrutura de dados que armazena um par chave/valor onde cada valor é identificado por uma chave única.
  dicionário -> possui a mesma definição em JS logo, um objeto em js é basicamente um dicionário

  Obs: Em outras situações, o dicionário é usado para se referir a um objeto cujo as chaves são sempre strings

  Um objeto pode ser considerado um dicionário mas nem todo dicionário é um objeto
 */

  const pessoa = {        // object //
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',
  };

  const frutas = {       // dictionary //
    'banana': 1.50,
    'maçã': 2.00,
    'laranja': 1.20
  };

/*Principal diferença entre NULL e UNDEFINED

Em resumo, a principal diferença entre null e undefined é que undefined indica que uma variável não foi inicializada, enquanto null indica que uma variável foi intencionalmente definida sem valor.

*/
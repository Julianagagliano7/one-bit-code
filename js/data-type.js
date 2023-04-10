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


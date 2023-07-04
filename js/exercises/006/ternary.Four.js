// Converter uma pontuação em uma nota: 
//Escreva uma função que recebe uma pontuação (de 0 a 100) e retorna a nota correspondente (A, B, C, D ou F) usando o operador ternário.

let grade = parseFloat(7.9);

const result = (grade > 9.7 && grade <= 10) ? 'A+' :
(grade > 9.5  &&  grade <= 9.7)  ? 'A' :
(grade > 9.0  &&  grade <= 9.5)  ? 'A-':
(grade > 8.9  &&  grade <= 9.0)  ? 'B+':
(grade > 8.5  &&  grade <= 8.9)  ? 'B-':
(grade >= 7.9 &&  grade <= 8.5)  ? 'C+':
'D'; 

console.log(result); 






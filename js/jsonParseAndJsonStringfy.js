// Função JSON.parse() no JS 
// JSON -> OBJETO 
// O tipo de dado já é retornado de forma correta

const json = '{"nome" : "Maria", "profissao" : "Arquiteta", "idade" : 19, "casamento" : false}';

const data = JSON.parse(json);

console.log(data.nome);
console.log(data.profissao); 
console.log(data.idade);  
console.log(data.casamento);  

// Função stringfy 
// OBJETO -> JSON 

const paraJson = JSON.stringify(data); 
console.log(paraJson);  





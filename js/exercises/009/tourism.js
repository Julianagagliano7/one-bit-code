const name = prompt('What is your name?');
let isVisited = prompt('Have you ever been to a city before? yes/no');
let cities = ''; 
let counterCity = 0; 


while (isVisited === 'yes'){
  counterCity++; 

  let cityName = prompt('Type down the name of the city:');
  cities += ' \n- ' + cityName + '\n';

  isVisited = prompt('Have you ever visited another city? yes/no');
}

alert('O nome do turista é: ' + name);
alert('O ' + name + ' visitou ' + counterCity + ' cidades');
alert(name + ' visitou essas cidades: ' + cities); 

//nome do turista 
// nº de cidades que visitou
// quais cidades visitou 
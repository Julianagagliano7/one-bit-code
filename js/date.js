/* let dateAndHour = Date();
console.log(dateAndHour); 
console.log(typeof dateAndHour);    */
//sai como string, não consigo acessar os métodos dos objetos - ineficaz


let dataComConstrutor = new Date();
let data1 = dataComConstrutor.getHours(); 
console.log(data1);  

//consigo acessar especificamente determinados métodos dos meus objetos 
//exemplos de métodos disponíveis 
//.getMillisseconds()
//.getSeconds()
//.getMinutes()
//.getHours()
//.getDay()
//.getMonth()
//.getFullYear()


let dateAndHour = new Date(); 
console.log(dateAndHour);  
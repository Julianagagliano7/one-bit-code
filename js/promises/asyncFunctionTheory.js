//Theory
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Sucess");
  } else {
    reject("Failed");
  }
});

//quando a promessa p for resolvida com sucesso, chamo message
//quando a promessa p falhar, chamo err

p.then((message) => {
  console.log("This is the then " + message); //parâmetro p poderia ser qualquer coisa para retornar 'Sucess'
}).catch((err) => {
  console.log("This is the catch " + err);
});

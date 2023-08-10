//Transforme aqui a função síncrona do outro código em assíncrona
const betterDeveloper = "Vanessa";

let p = new Promise((resolve, reject) => {
  if (betterDeveloper != "Vanessa" && betterDeveloper != "Gabriel") {
    reject({
      name: "This is wrong",
      message: betterDeveloper + "? Really",
    });
  } else {
    resolve({
      name: betterDeveloper,
      message: "CDFs are the best!",
    });
  }
});

p.then((result) => {
  console.log(result.name + ' ' + result.message);
}) .catch((err) => {
  console.log(err.name + ' ' + err.message)
}); 


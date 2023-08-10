// Criando duas promises para depois utilizá-las com async-await

function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        sucess: true,
        bandName: band,
        mgs: band + " is the best rock band ever!",
      });
    } else {
      reject({
        success: false,
        mgs: "I/m not so sure!",
      });
    }
  });
}

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.sucess) {
      resolve("Bohemian Rhapsody by " + response.bandName);
    } else {
      reject("Do you know Queen?");
    }
  });
}
/* 
bestRockBand("Queen")
  .then((response) => {
    console.log("Checking the answer...");
    return bestRockSong(response);
  })
  .then((reponse) => {
    console.log("Finding the best song...");
    console.log(reponse);
  })
  .catch((err) => {
    console.log(err.mgs);
  }); */

// como a primeira promise deu reject, ele não chega a executar a segunda - conceito de programação ASSÍNCRONA
// alternativa para a chamada com vários then's(como está acima) é utilizando o AWAIT

async function showTheResults(){
  const bestRockBandResponse = await bestRockBand('Queen');
  console.log(bestRockBandResponse);
  const bestRockSongResponse = await bestRockSong(bestRockBandResponse); 
  console.log(bestRockSongResponse); 
}

showTheResults(); 
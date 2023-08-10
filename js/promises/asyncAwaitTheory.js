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

// Jeito antigo de se fazer...mil then aninhados - await async resolve isso 
/* bestRockBand("Kiss")
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


async function showTheResults() {
  try {
    const bestRockBandResponse = await bestRockBand("Kiss");
    console.log(bestRockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
  } catch (err) {
    console.log(err.mgs);
  }
}

showTheResults();

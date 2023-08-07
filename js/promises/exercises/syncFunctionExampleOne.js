//Você deve transformar essa função síncrione em assíncrona usando promises no outro arquivo

const betterDeveloper = "Vanessa";

function whoIsBetterDeveloper(callback, errorCallback) {
  if (betterDeveloper != "Vanessa" && betterDeveloper != "Gabriel") {
    errorCallback({
      name: "This is wrong",
      message: betterDeveloper + "? Really",
    });
  } else {
    callback({
      name: betterDeveloper,
      message: "CDFs are the best",
    });
  }
}

whoIsBetterDeveloper((result) => {
  console.log(result.name + "" + result.message);
}),
  (error) => {
    console.log(error.name + "" + error.message);
  };

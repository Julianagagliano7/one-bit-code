const betterDeveloper = "Vanessa";

function whoIsBetterDeveloper() {
  return new Promise((resolve, reject) => {
    if (betterDeveloper != "Vanessa" && betterDeveloper != "Gabriel") {
      reject({
        name: "This is wrong",
        message: betterDeveloper + " ? Really?",
      });
    } else {
      resolve({
        name: betterDeveloper,
        message: "CFDs are the best",
      });
    }
  });
}

whoIsBetterDeveloper()
  .then((result) => {
    console.log(result.name + " " + result.message);
  })
  .catch((err) => {
    console.log(err.name + " " + err.message);
  });

function legalAge (currentAge) {
  if (currentAge >= 18 && currentAge < 60) {
    alert('legal age!');
  }
  else if (currentAge >= 12 && currentAge < 60){
    alert('teenager');
  }
  else if(currentAge >= 60){
    alert('old guy');
  }
  else if (currentAge <= 5){
    alert('baby')
  }
  else{
    alert('kid');
  }
}

let age = prompt('Type down your current age');
legalAge(age);


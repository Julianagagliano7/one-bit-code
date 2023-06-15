function legalAge (currentAge) {
  if (currentAge >= 18) {
    alert('Legal Age!')
  }
  else {
    alert('Not legal age')
  }
}

let age = prompt('Type down your current age');
legalAge(age);


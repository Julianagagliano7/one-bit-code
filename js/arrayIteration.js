// usando a função forEach nativa do JS 

const exampleArray = [1, 2, 3, 4, 5];

exampleArray.forEach(myElement => {
  console.log(myElement)
})

// usando a função Map nativa do JS 

const array = [1, 2, 3, 4, 5];

const newArray = array.map(element => {
  return element * 2
}); 

console.log(newArray); 
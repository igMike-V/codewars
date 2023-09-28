//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  const words = str.split(' ')
  const converted = words.map(word => {
    if(word.length === 1 && word.match(/[^a-zA-Z]+/)){
      return word
    }
    return pigWord(word.split(''))
  })

  return converted.join(' ')
  
}

// returns a string
function pigWord(arr){
  const arrCopy = [...arr]
  const first = arrCopy.shift()
  arrCopy.push(first)
  return(arrCopy.join('') + 'ay')
}


// Tests
console.log(pigIt('Pig latin is cool'),'  igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'  hisTay siay ymay tringsay')
console.log(pigIt("This ain't as simple !"),' custom test')
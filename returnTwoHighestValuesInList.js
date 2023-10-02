/* In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest. */

function twoHighest(arr) {
  // reverse sort array
  // convert array to set to get unique values 
  let numSet = new Set(arr.sort((a, b) => b - a))
  // spread back to array and return first 2 or less elements
  return [...numSet].slice(0,2)
}

// single line
function twoHighestAlt(arr) {
  return [...new Set(arr)].sort((a,b) => b - a).slice(0, 2)
}


console.log(twoHighest([]), [])
console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])
console.log(twoHighestAlt([]), [])
console.log(twoHighestAlt([15]), [15])
console.log(twoHighestAlt([15, 20, 20, 17]), [20, 17])
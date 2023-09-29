/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
findOdd([7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
  // Iterate through the array
    // Filter out first element and check if odd
    // return {elementRemoved, isOddCount, [filteredArray]}
  function filterArray(arr) {
    // return if only one element
    if(arr.length === 1) return { elementRemoved: arr[0], isOddCount: true, filterArray: [...arr]}
    const elementRemoved = arr[0]
    isOddCount = true
    filteredArray = []
    for(let i = 1; i < arr.length; i++){
      if(arr[i] === elementRemoved) {
        isOddCount = !isOddCount
      } else {
        filteredArray.push(arr[i])
      }
    }
    return { elementRemoved, isOddCount, filteredArray }
  }

  const searching = true
  let currentData = filterArray(A)

  while (searching) {
    // test for completness:
    if (currentData.isOddCount) {
      return currentData.elementRemoved
    }
    // Rinse and repeat
    currentData = filterArray(currentData.filteredArray)
  }
  // we should be left with a single element (and the answer)
  return currentData.elementRemoved
}

console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1,1,2]), 2);
console.log(findOdd([0,1,0,1,0]), 0);
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);
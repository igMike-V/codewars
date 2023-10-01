multiplicationTable = function(size) {
  // set an empty table
  let table = []
  // iterate through an n*n matrix (1 to n), multiply the first value by the current value 
  for (let i=0; i < size; i++){
    // create a new array within our table, spreading in the previous value
    table = [...table, []]
    for (let j=0; j < size; j++){
      table[i][j] = (i+1) * (j+1);
    }
  }
  return table
}

console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
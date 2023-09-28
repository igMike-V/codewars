/* 
*  Challenge:
*  The rgb function is incomplete. 
*  Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
*  Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
*  
*
*  Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*
*/

function rgb(r, g, b){
  // round values
  // convert each value to hex
  // pad 1 digit conversions

  const conversion = [
    validateDec(r).toString(16).padStart(2, '0').toUpperCase(),
    validateDec(g).toString(16).padStart(2, '0').toUpperCase(),
    validateDec(b).toString(16).padStart(2, '0').toUpperCase(),
  ]
  
  // join hex values into a single string
  return conversion.join('')
}

function validateDec(dec){
  // round
  // if negative make 0
  // if > 255 make 255
  const roundedDec = Math.round(dec)
  return Math.max(Math.min(roundedDec, 255), 0)
}


// Tests
console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')
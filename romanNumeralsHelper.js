// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
/* Write two functions that convert a roman numeral to and from an integer value. 
Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately
 starting with the left most digit and skipping any digit with a value of zero. 
 In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
 2008 is written as 2000=MM, 8=VIII; or MMVIII.
  1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four"). */

// for the value of a single digit (hundreds) 1-3 = CCC 4-CD  5-8 = D+( "C".repeat(n-5) )  9 = CM

class RomanNumerals {
  static toRoman(num) {
    //check each number from left to right
    // convert digit to roman numeral

    // Variable to build 
    let romanNumeral = ''
    const numStr = num.toString()
    let currentValues = this.reduceNumber({ current: 0, nextVal: numStr })
    const rn = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let order = 0
    if (numStr.length === 1){
      order = 6
    } else if ( numStr.length === 2){
      order = 4
    } else if (numStr.length === 3){
      order = 2
    }

    while(order < 7){
      const { current } = currentValues
      // 1000's
      if(order === 0){
        romanNumeral += rn[0].repeat(current)
      } else {
        if(current<4){
          romanNumeral += rn[order].repeat(current)
        } else if(current === 5){
          romanNumeral += rn[order - 1]
        } else if(current === 4){
          romanNumeral += `${rn[order]}${rn[order-1]}`
        } else if (current === 9){
          romanNumeral += `${rn[order]}${rn[order-2]}`
        } else if (current === 0){
          //number is zero
          romanNumeral = romanNumeral
        } else {
          romanNumeral += `${rn[order-1]}${rn[order].repeat(current-5)}`
        }
      }
      order += 2
      currentValues = this.reduceNumber(currentValues)
    }
    return romanNumeral
  }

  // get the next number and return the current cursor
  static reduceNumber(numObj){
    let strNum = numObj.nextVal.toString()
    const current = parseInt(strNum[0]) || 0
    const nextVal = strNum.substring(1)
    return { current, nextVal }
  }

  static fromRoman(str) {
    // total to return and current index of str
    let total = 0
    let count = 0
    // lookup array of possible roman numerals
    const rn = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    // lookup index for value of roman numeral
    const rnVal = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    
    //iterate over str
    while(count < str.length){
      // set one and two digit roman numerals to test against lookup array
      let oneDigit = str[count]
      let twoDigit = `${str[count]}${str[count + 1]}`
      // initialze lookup index to be out of range
      let idx = -1
  
      if(str.length -1 === count){
        // If its the last digit only lookup against a single digit
        idx = rn.findIndex(i => i === oneDigit)
        total = total + rnVal[idx]
        count++
      } else {
        // try double first
        idx = rn.findIndex(i => i === twoDigit)
        if (idx >= 0){
          total = total + rnVal[idx]
          count = count + 2
        } else {
          // lookup failed on double digit try single
          idx = rn.findIndex(i => i === oneDigit)
          total = total + rnVal[idx]
          count = count + 1
        }
      }
    }
    return total
  }
}

console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1999), 'MCMXCIX');
console.log(RomanNumerals.toRoman(1990), 'MCMXC'); 
console.log(RomanNumerals.toRoman(2008), 'MMVIII');
console.log(RomanNumerals.toRoman(530), 'DXXX');

console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);
console.log(RomanNumerals.fromRoman('DXXX'), 530);
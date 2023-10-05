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
    let romanNumeral = ''
    let currentValues = this.reduceNumber({current: 0, nextVal: num})
    const rn = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let order = 0
    while(currentValues.continue){
      const { current } = currentValues
  
      console.log('curr:', current) 
      if (current === 0){
        //number is zero
        romanNumeral = romanNumeral
      }
      // 1000's
      if(order === 0){
        console.log('thousands column')
        romanNumeral += rn[0].repeat(current)
      } else {
        if(current<4){
          console.log('less than 4')
          romanNumeral += rn[order].repeat(current)
        } else if(current === 4){
          console.log('is 4')
          romanNumeral += rn[order]
        } else if (current === 9){
          console.log('is 9')
          romanNumeral += `${rn[order]}${rn[order-2]}`
        } else {
          console.log('current will repeat', current-5)
          romanNumeral += `${rn[order-1]}${rn[order].repeat(current-5)}`
        }
      }
      order += 2
      currentValues = this.reduceNumber(currentValues)
      console.log(romanNumeral)
    }
    return romanNumeral
  }

  static reduceNumber(numObj){
    let strNum = numObj.nextVal.toString()
    const current = parseInt(strNum[0])
    const nextVal = parseInt(strNum.substring(1)) || 0

    return { current, nextVal }
  }


  static fromRoman(str) {
    return 4;
  }
}

/* console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(1111), 'M');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1999), 'MCMXCIX');
console.log(RomanNumerals.toRoman(1990), 'MCMXC'); */
console.log(RomanNumerals.toRoman(2008), 'MMVIII');
/*
console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666); */
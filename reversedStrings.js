// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

/* Description:
*  Complete the solution so that it reverses the string value passed into it.
*/

// Solution:
function solution(str){
  return str.split('').reverse().join('')
}

console.log(solution("world"))
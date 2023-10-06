/* 
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

format for expressing an ordered list of integers is to use a 
comma separated list of either individual integers or a range of integers
denoted by the starting integer separated from the end integer in the
range by a dash, '-'. The range includes all integers in the interval 
including both endpoints. It is not considered a range unless it spans
at least 3 numbers. For example "12,13,15-17" Complete the solution so that 
it takes a list of integers in increasing order and returns a correctly
formatted string in the range format. 
*/

function solution(list){
  // sort incoming list
  const sortedList = list.sort((a,b)=>a-b)
  // create a stack for adding elements
  let min = null
  let prev = null
  let returnArray = []
  // iterate over the list
  console.log(sortedList)
  i = 0
  while(i < sortedList.length){

    function pushIt(){
      if(min === prev){
        returnArray.push(min)
        min = sortedList[i]
        prev = sortedList[i]
      } else if (prev > min+1){
        returnArray.push(`${min}-${prev}`)
        min = sortedList[i]
        prev = sortedList[i]
      } else {
        returnArray.push(`${min},${prev}`)
        min = sortedList[i]
        prev = sortedList[i]
      }
    }

    // end condition
     if(!min){
      min = sortedList[i]
      prev = sortedList[i]
    } else {
      if(prev+1 === sortedList[i]){
        // store it
        prev = sortedList[i]
      } else {
        //push it
        pushIt()
      }
    }
    if(sortedList.length-1 === i){
      pushIt()
    }
    i++
  }  
  return returnArray.join(',')
 }


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
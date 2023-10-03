/* Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0. 
https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
*/

function neutralise(s1, s2) {
  // convert one string to an array of chars, map over each, comparing to other string
  // if equal return the same char, otherwise return '0'
  return s1.split('').map((s,i) => s === s2[i] ? s : '0').join('');
}

console.log(neutralise("--++--", "++--++"), "|   000000");
console.log(neutralise("-+-+-+", "-+-+-+"), "|   -+-+-+");
console.log(neutralise("-++-", "-+-+"), "|   -+00");
console.log(neutralise("--++", "++++"), "|   00++");
console.log(neutralise("+++--+---", "++----++-"), "|   ++0--000-");
console.log(neutralise("-----", "-----"), "|   -----");
console.log(neutralise("-+", "++"), "|   0+");
console.log(neutralise("--", "-+"), "|   -0");
console.log(neutralise("-++", "+--"), "|   000");
console.log(neutralise("++-++--++-", "-+++-++-++"), "|   0+0+0000+0");
console.log(neutralise("-++-+-++-", "+-++++---"), "|   00+0+000-");
console.log(neutralise("---++-+--", "-+++--++-"), "|   -00+0-+0-");
console.log(neutralise("+-----+++-", "--+-+-++--"), "|   0-0-0-++0-");
console.log(neutralise("+-----+-", "---++-++"), "|   0--00-+0");
console.log(neutralise("-+--+-+---", "-+--+-+-+-"), "|   -+--+-+-0-");
console.log(neutralise("+-+", "-++"), "|   00+");
console.log(neutralise("-++", "-+-"), "|   -+0");
console.log(neutralise("---+", "-+++"), "|   -00+");
console.log(neutralise("+--", "+--"), "|   +--");  
console.log(neutralise("--+++-+-", "+++++---"), "00+++-0-");
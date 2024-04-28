/* Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string) {
  const strSet = new Set(string.toLowerCase().replace(/[^a-z]/g, ""));
  return strSet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false

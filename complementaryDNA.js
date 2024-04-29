/* 
In DNA strings, symbols "A" and "T" are complements of each other
as "C" and "G". Your function receives one side of the DNA (string, except for Haskell);
you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// A becomes T
// C becomes G

// Create a lookup table for dna pairs
const dnaCodex = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function dnaStrand(dna) {
  return dna
    .split("")
    .map((val) => dnaCodex[val])
    .join("");
}

console.log(dnaStrand("AAAA"), "TTTT", "String AAAA is");
console.log(dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(dnaStrand("GTAT"), "CATA", "String GTAT is");

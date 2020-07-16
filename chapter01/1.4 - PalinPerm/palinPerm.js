/*
Given a string, write a function to check if it's a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

Look at the example. Tact Coa is a palindrome because it only has one letter that appears an odd number of times
Iterate across the string and tabulate the number of occurrences of each letter.
Then iterate across the values in the auxiliary object, counting to see how many are odd
*/

function palinPerm(str) {
  const charFreq = {};
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      const currChar = str[i].toLowerCase();
      if (charFreq[currChar]) charFreq[currChar] += 1;
      else charFreq[currChar] = 1;
    }
  }
  const frequencies = Object.values(charFreq);
  let oddCounter = 0;
  for (let j = 0; j < frequencies.length; j += 1) {
    if (frequencies[j] % 2 === 1) {
      oddCounter += 1;
      if (oddCounter > 1) return false;
    }
  }
  return true;
}

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');

/*
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

Look at the example...
I'm comparing each character...
There cannot be more than one character that's different
If they're the same length, it has to be a replace operation
If their lengths have a difference of 1, then what if we add the first "different character" from the longer to the shorter at the proper index
Keep track of the edits necessary

*/

function oneAway(str1, str2) {
  if (str1 === str2) return true;
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let editsAway = 0;
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] !== str2[i]) {
        // editsAway += 1;
        // console.log(editsAway);
        if (++editsAway > 1) return false;
      }
    }
    return true;
  }
  if (str1.length < str2.length) return oneAway(str2, str1);
  for (let j = 0; j < str1.length; j += 1) {
    if (editsAway === 0) {
      if (str1[j] !== str2[j]) {
        // editsAway += 1;
        if (++editsAway > 1) return false;
      }
    } else if (editsAway === 1) {
      if (str1[j] !== str2[j - 1]) return false;
    }
  }
  return true;
}

// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
console.log(oneAway('scarany', 'scabrany'), true);

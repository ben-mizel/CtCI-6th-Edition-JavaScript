/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

We're given Mr John Smith, which has 13 characters, and the number 13, which is its true length. We return the urlified string.
Can't we just replace spaces with the url encoded characters?

Ah, I see...
If a space is not followed by a space and it's not the last character, replace it
*/

function urlify(str) {
  let results = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ' ' && str[i + 1] !== ' ' && i !== str.length - 1) results += '%20';
    else if (str[i] !== ' ') results += str[i];
  }
  return results;
}

console.log(urlify('Mr John       Smith      ', 13), 'Mr%20John%20Smith');

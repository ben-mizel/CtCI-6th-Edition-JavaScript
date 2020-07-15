/*
Given two strings, write a method to decide if one is a permutation of the other.

So for example, given the strings 'catdion' and 'taciod', we would return true
How does my brain solve this?
I know they need to have the same number of letters
If I can cross off each corresponding letter in the second string and wind up with zero left, I know it's a combination
Describe a mid-level approach
Iterate over the first string
For each character, get the first-appearance index of that character in the second string
If the first-appearance index is -1, return false
Otherwise, remove that first-appearance of the character from the second string
If, after iterating through the entire first string, there are any characters in the second string remaining, return false
Otherwise, return true
*/

function checkPermute(str1, str2) {
  const arr2 = str2.split('');
  for (let i = 0; i < str1.length; i += 1) {
    const currChar = str1[i];
    const arr2Idx = arr2.indexOf(currChar);
    // console.log(arr2Idx);
    if (arr2Idx === -1) return false;
    arr2.splice(arr2Idx, 1);
    // console.log(arr2);
  }
  return !arr2.length;
}

/*
Conceptually, what's happening?
I'm splitting the second string into an array, which has a time complexity of O(str2)
Then, I'm iterating over the first string O(str1) and, for each character, I'm potentially iterating through all of str2 O(str1 * str2)
I think we have a time complexity of O(n * m)
I think the best conceivable runtime would still require us to check every character once in the first str and every character once in the second string, which would be O(n + m)... is that doable?

I suppose we could iterate through the second string at the top, and store every character in an auxiliary object
Then, as we iterate over the first string, we could delete each character from that object and see if it's empty by the end
That would, I think, give us a time complexity of O(n + m)
*/

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);

console.log(checkPermute('catdion', 'atcniod'), true);

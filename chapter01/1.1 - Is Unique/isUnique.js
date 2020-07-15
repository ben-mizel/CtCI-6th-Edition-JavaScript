/*
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

Let's look at the examples.
So for example, a string 'eioniouy' would return false because i and o are repeated.
Given a string, return a boolean describing whether every character is unique
How does my brain solve this high-level?
I check each letter and ask myself, "Have I seen this letter before?"
Let's do this with mid-level pseudocode...
Create a cache object to store each letter as I find it
Iterate over the input string
Check each character and ask if I've seen it before
Now let's write low-level code
*/

function everyCharUnique(str) {
  const cacheObj = {};
  for (const char of str) {
    if (cacheObj[char]) return false;
    cacheObj[char] = 1;
  }
  return true;
}

/*
Conceptually, what's happening?
I'm checking each character of the string once to see if I've seen it before
This algorithm has a linear time complexity.
There's no way to avoid potentially needing to look at every character, so I've matched the Best Conceivable Runtime
*/

/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');

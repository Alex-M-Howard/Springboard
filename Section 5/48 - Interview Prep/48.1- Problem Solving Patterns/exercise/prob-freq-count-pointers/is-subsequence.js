// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str2[pointer2] !== str1[pointer1]) {
      pointer2++;
    } else {
      pointer1++;
    }
  }

  return pointer2 === str2.length ? false : true; //If this is true or even pointer1 = to str2.length means it went beyond string

}


// isSubsequence
// Write a function called isSubsequence which takes in two strings and 
//checks whether the characters in the first string form a subsequence of 
//the characters in the second string.In other words, the function should 
//check whether the characters in the first string appear somewhere in the 
//second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)
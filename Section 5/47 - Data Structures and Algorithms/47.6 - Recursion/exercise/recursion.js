/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (!nums.length) {
    return 1;
  } else {
    return nums.pop() * product(nums);
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (!words.length) {
    return words.length;
  } else {
    let word = words.pop();
    return Math.max(word.length, longest(words));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (!str) {
    return "";
  } else {
    return str.slice(0, 1) + everyOther(str.slice(2));
  }
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  console.log(str);
  if (!str) {
    return "";
  } else {
    return str.slice(0) === isPalindrome(str.slice(1).slice(str.length - 1));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

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
  if (!str || str.length === 1) {
    return true;
  } else {
    return (
      str[0] === str[str.length - 1] &&
      isPalindrome(str.slice(1, str.length - 1))
    );
  }
}



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (!arr.length) {
    return -1;
  }

  if (arr[0] === val) {
    return 0;
  }

  let idx = findIndex(arr.slice(1), val);
  return idx === -1 ? -1 : idx + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (!str) {
    return "";
  }

  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
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

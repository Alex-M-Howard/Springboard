// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  const num1FreqCount = frequencyCounter(num1);
  const num2FreqCount = frequencyCounter(num2);

  for (let digit in num1FreqCount) {
    if (num1FreqCount[digit] === num2FreqCount[digit]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function frequencyCounter(str) {
  const freqCount = {};

  for (let letter of str) {
    freqCount[letter] = freqCount[letter] + 1 || 1;
  }

  return freqCount;
}


// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if 
// the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

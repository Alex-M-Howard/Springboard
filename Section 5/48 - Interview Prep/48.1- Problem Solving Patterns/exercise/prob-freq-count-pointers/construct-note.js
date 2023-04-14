function constructNote(message, letters) {

  const messageCount = frequencyCounter(message);
  const lettersCount = frequencyCounter(letters);
  
  for (let letter in messageCount) {
    if (messageCount[letter] - lettersCount[letter] <= 0) {
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

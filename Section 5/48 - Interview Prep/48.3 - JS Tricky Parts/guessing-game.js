function guessingGame() {
  let guesses = 0;
  let answer = Math.floor(Math.random() * 100);
  let isWon = false;
  return function checkAnswer(guess) {
    guesses++;

    if (isWon) {
      return "The game is over, you already won!";
    }

    if (guess === answer) {
      isWon = true;
      return `You win! You found ${answer} in ${guesses} guesses.`;
    } else if (guess < answer) {
      return (`${guess} is too low!`);
    } else {
      return (`${guess} is too high!`);

    }
  };
}

module.exports = { guessingGame };

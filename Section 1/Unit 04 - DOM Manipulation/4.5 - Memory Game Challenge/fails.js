document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("game");
  const guessedCards = [];
  let noClicking = false
    
  // function sleep(milliseconds) {   //I'm having issues with setInterval and setTimeout being asynchronous
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }

  const CARDS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
  ];

  // here is a helper function to shuffle an array
  // it returns the same array with values shuffled
  // it is based on an algorithm called Fisher Yates if you want ot research more
  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  let shuffledColors = shuffle(CARDS);

  // this function loops over the array of colors
  // it creates a new div and gives it a class with the value of the color
  function createDivsForColors(colorArray) {
    for (let color of colorArray) {
      // create a new div
      const newDiv = document.createElement("div");

      // give it a class attribute for the value we are looping over
      newDiv.classList.add(color);

      // call a function handleCardClick when a div is clicked on
      // newDiv.addEventListener("click", handleCardClick);

      // append the div to the element with an id of game
      gameContainer.append(newDiv);
    }
  }


    
  const section = document.querySelector("section")
  section.addEventListener("click", handleCardClick);
    

  function handleCardClick(event) {
    if (event.target.id !== 'game' && !event.target.classList.value.includes("selected") && guessedCards.length < 2) {
      const color = event.target.classList.value;
      const card = event.target
      event.target.style.backgroundColor = color;
      guessedCards.push(card);
      checkCards(card);
    }
  }


  function checkCards(card) {
    for (let card in guessedCards) {
      console.log(guessedCards[card].style.backgroundColor)
    }
    card.classList.add('selected');
      
    if (guessedCards.length > 1) {
      if (guessedCards[0].classList.value === guessedCards[1].classList.value) {
        for (let card in guessedCards) {
          guessedCards[card].classList.add('matched');
        }

        const match = document.getElementsByClassName("match hidden")[0];
        match.classList.remove("hidden");
        const timer = setTimeout(function () {
          match.classList.add("hidden");
          guessedCards.pop();
          guessedCards.pop();
        }, 1250);
  
      } else {
        const timer = setTimeout(function () {
          const selected = document.querySelectorAll(".selected");
          for (card in selected) {
            if (selected[card].classList.value.includes('matched')) {
              continue;
            } else {
              selected[card].classList.remove('selected');
              selected[card].style.backgroundColor = 'white';
            }
            guessedCards.pop()
            guessedCards.pop()
          }
  
        }, 1500);
      }
    }
  }

  // when the DOM loads
  createDivsForColors(shuffledColors);
})

let timer = 60;
$("#time-left").text(timer)

const button = $("#try-word");
const reset = $("#reset");
let gameOver = false;

/**
 * Get guessed word and send to "/check"
 * With response, show valid or invalid to user
 */
$(button).on("click", async (event) => {
    event.preventDefault();
    let guess = $("#word-input")
    if (gameOver) return;
    if (guess.length === 0) return;

    startTimer();
    guess = $(guess).val().toLowerCase();
    let response = await checkAnswer(guess);
    $("#word-input").val("")
    
    if (response.data["result"] === "valid") {
        updateScore(response.data["score"]);
        updateWords(guess)
        showUserWordResult(response.data["result"]);
    } else {
        showUserWordResult(response.data["result"])
    }

})

/**
 * Handle click of reset button
 * Call reset of game data server side
 * Call redrawing of board
 */
$(reset).on("click", async (event) => {
    event.preventDefault();
    let response = await resetGameData();
    redrawBoard(response.data);

})


/**
 * @param {string} guess 
 * @returns either "valid" or "invalid"
 */
function checkAnswer(guess) {
    let response = axios({
        method: "POST",
        url: "/check",
        data: {
            "guess": guess
        }
    })    

    return response;
} 

/**
 * Changes score on screen
 * @param {integer} score 
 */
function updateScore(newScore){
    const score = $("#score")
    $(score).text(`Score: ${newScore}`)
}
 

/**
 * Reveals a list of successful words guessed
 * @param {string} word 
 */
function updateWords(word) {
    if ($("#words-list").hasClass("hidden")) {
        $("#words-list").removeClass("hidden");
    }
    $("ul").append(`<li>${word.toUpperCase()}</li>`);
    
    return
}

/**
 * Clears word list and hides section
 */
function clearWords() {
    // Empty words list
    $("ul").empty()

    // Hide area
    $("#words-list").addClass("hidden")

    return
}

/**
 * Resets game data on the server
 * @returns get response with new game board
 */
function resetGameData() {
    console.log('RESETTING GAME')
    axios({
            method: "POST",
            url: "/reset"
    })
    document.location.reload ()
}


/**
 * Empty letters on board, recreate game board
 * Set score to 0 on screen
 * Clear words list
 * @param {array} rows - Contains letters for each row 
 */
function redrawBoard(rows) {
    // Change letters on game board
    let boardArea = $("#letters").empty();
    for (let row of rows) {
        let div = $("<div>").addClass("row");
        
        for (let letter of row) {
            let letterSquare = $(`<div>${letter}</div>`).addClass("letter");
            $(div).append(letterSquare);
        }
        
        $(boardArea).append(div);
    }

    // Reset score on board back to 0
    updateScore(0);

    // Hide Words Found and Empty list on screen
    clearWords();

}

function showUserWordResult(result){
    let display = $("#result")
    if (result === "valid") {
        $(display).addClass("success");
        $(display).removeClass("fail");
    } else {
        $(display).addClass("fail");
        $(display).removeClass("success");
    }

    $(display).css("display", "inline").text(result.toUpperCase())
    $(display).fadeOut(800)

}


function startTimer() {
    let timeLeft = $("#time-left").text();
    timeLeft = parseInt(timeLeft);

    let time = setInterval(() => {
        if (timeLeft === 0) {
            clearInterval(time);
            showGameOver();
            

        } else {
            timeLeft = timeLeft - 1
            $("#time-left").text(timeLeft)
        }
    }, 1000);
}

function showGameOver() {
    gameOver = true;
    let display = $("#result")  
    $(display).addClass("game-over");
    $(display).css("display", "inline").text("GAME OVER")
    let time = setTimeout(() => {
        resetGameData();
    }, 3000)

}

const button = $("#try-word")
const reset = $("#reset")

/**
 * Get guessed word and send to "/check"
 * With response, show valid or invalid to user
 */
$(button).on("click", async (event) => {
    event.preventDefault();
    let guess = $("#word-input")
    if (guess.length === 0) return;

    guess = $(guess).val().toLowerCase();
    let response = await checkAnswer(guess);
    $("#word-input").val("")
    
    if (response.data["result"] === "valid") {
        updateScore(response.data["score"]);
        updateWords(guess)
    }
    console.log(response)
})


/**
 * Handle click of reset button
 */
$(reset).on("click", async (event) => {
    event.preventDefault();
    let promise = await resetGameData();
    console.log(promise)
    promise.then(reloadPage())
})



/**
 * 
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
 *  
 * Changes score on screen
 * @param {integer} score
 * 
 */

function updateScore(newScore){
    const score = $("#score")
    $(score).text(`Score: ${newScore}`)
}
 

/**
 * Reveals a list of successful words guessed
 * @param {string} word 
 * 
 */
function updateWords(word) {
    if ($("#words-list").hasClass("hidden")) {
        $("#words-list").removeClass("hidden");
    }
    $("ul").append(`<li>${word.toUpperCase()}</li>`);
    
    return
}



function resetGameData() {
    console.log('RESETTING GAME')
    let promise = new Promise(() => {
        console.log('I PROMISE TO DO THIS')
        let response = axios({
            method: "POST",
            url: "/reset"
        })
        console.log(response)
        return response
    })
    console.log(promise)
    return promise
}

function reloadPage() {

        axios({
            method: "GET",
            url: "/boggle"
        })
    
    
}
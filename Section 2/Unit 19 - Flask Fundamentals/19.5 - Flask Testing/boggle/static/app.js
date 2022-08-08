const button = $("#try-word")
const reset = $("#reset")

/**
 * Get guessed word and send to "/check"
 * With response, show valid or invalid to user
 */
$(button).on("click", async (event) => {
    event.preventDefault();
    const guess = $("#word-input").val().toLowerCase();
    let response = await checkAnswer(guess);
    $("#word-input").val("")
    console.log('button function before score added')
    if (response.data["result"] === "valid") {
        updateScore(response.data["score"]);
        updateWords(guess)
    }
    console.log('button function after score added')
    console.log(response)
})

/**
 * Handle click of reset button
 */
$(reset).on("click", async (event) => {
    console.log('hello')
    event.preventDefault();
    console.log('clicking button')
    axios({
        url: "/reset"
    })
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



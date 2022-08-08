const button = $("#try-word")

$(button).on("click", async (event) => {
    event.preventDefault();

    const guess = $("#word-input").val().toLowerCase();
    await check_answer(guess);
})


function check_answer(guess) {
    const response = axios({
        method: "POST",
        url: "/check",
        data: {
            "guess": guess
        }
    })    
} 

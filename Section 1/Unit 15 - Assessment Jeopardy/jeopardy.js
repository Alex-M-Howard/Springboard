const apiEndpoint = "//jservice.io";
const cluesEndpoint = `${apiEndpoint}/api/clues`;
const categoriesEndpoint = `${apiEndpoint}/api/category`;
const clues = [];

/** Get 6 random category IDs **/

async function getCategoryIds() {
    const categories = [];

    for (let i = 0; categories.length < 6; i++){
        let id = Math.ceil(Math.random() * 18000);        
        if (categories.includes(id)) { continue; }
        else {categories.push(id);}      
    }

    return categories;
}

/** Return object with data about a category:
 *
 *  Returns { category id: ###, category: "Math", clues by value: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategoryData(category) {
    const data = {};
    for (let i = 0, value = 200; i < 5; i++, value += 200) {
        const response = await axios.get(cluesEndpoint, { params: { category } })

        data["id"] = category;
        data["category"] = response.data[0].category.title.toUpperCase();
        data[value] = {
            "answer": response.data[i].answer.toUpperCase(),
            "question": response.data[i].question.toUpperCase(),
            "showing": null
        };
    }
    clues.push(data);
}

/** Populate the gameboard with all of the question values. Change start button to 'Restart' **/
async function fillTable() {
    $("table").remove()
    $("#game-area").append($(" <table><tr id='categories'></tr><tr id='200'></tr><tr id='400'></tr><tr id='600'></tr><tr id='800'></tr><tr id='1000'></tr></table>"))

    for (let clue of clues) {
        $("#categories").append($(`<th>${clue["category"]}</th>`).attr("id", clue["id"]))
        $("#200").append($("<td>$200</td>").attr("id", `${clue["id"]}-200`).addClass("clue")).unbind().click(handleClick);
        $("#400").append($("<td>$400</td>").attr("id", `${clue["id"]}-400`).addClass("clue")).unbind().click(handleClick);
        $("#600").append($("<td>$600</td>").attr("id", `${clue["id"]}-600`).addClass("clue")).unbind().click(handleClick);
        $("#800").append($("<td>$800</td>").attr("id", `${clue["id"]}-800`).addClass("clue")).unbind().click(handleClick);
        $("#1000").append($("<td>$1000</td>").attr("id", `${clue["id"]}-1000`).addClass("clue")).unbind().click(handleClick);
    }
    $("#start-button").text("Restart")
}

/** Handle clicking on a clue: show the question or answer. Sends target ID to checkCard**/
function handleClick(event) {
    const value = $(this).attr("id");
    const id = $(event.target).attr("id");
    checkCard(value, id);
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data. */
function showLoadingView() {
    $("#spinner").css("display", "block")
}

/** Check if card is showing dollar amount, question, or answer **/ 
const checkCard = (value, id) => {
    let index = null;

    clues.forEach((clue, idx) => {
        if (clue["id"] === parseInt(id)) {
            index = idx;
            return;
        }
    })

    try {
        clues[index][value].showing === null ? showQuestion(value, index, id) : showAnswer(value, index, id)
    } catch { }
}

/** Show Question on Board **/
const showQuestion = (value, index, id) => {
    const question = clues[index][value].question;
    clues[index][value].showing = true;
    $(`#${id}`).text(question).addClass("question");
}

/** Show Answer on Board **/
const showAnswer = (value, index, id) => {
    if (clues[index][value].showing) {
        const answer = clues[index][value].answer
        clues[index][value].showing = false;
        $(`#${id}`).html(answer)    
    }
    return
}


/** Remove the loading spinner*/
function hideLoadingView() {
    $("#spinner").css("display", "none")
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    clues.length = 0;
    $("table").remove();
    let categoryIDs = await getCategoryIds(); 
    await Promise.all(categoryIDs.map((id) => { return getCategoryData(id) }));
    await fillTable();
}

/** On click of start / restart button, set up game. */
$("#start-button").on("click", async () => {
    showLoadingView();
    try{await setupAndStart()}catch{await setupAndStart()}
    hideLoadingView();
})

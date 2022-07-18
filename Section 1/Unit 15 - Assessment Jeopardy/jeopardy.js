const apiEndpoint = "http://jservice.io";
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

/** Populate the gameboard with all of the question values **/
async function fillTable() {
    for (clue of clues) {
        $("#categories").append($(`<div>${clue["category"]}</div>`).attr("id", clue["id"]).addClass("col-2 border border-dark align-middle text-center align-self-center"))
        $("#200").append($("<div>$200</div>").attr("id", `${clue["id"]}-200`).addClass("col-2 border border-dark align-middle text-center clue")).unbind().click(handleClick);
        $("#400").append($("<div>$400</div>").attr("id", `${clue["id"]}-400`).addClass("col-2 border border-dark align-middle text-center clue")).unbind().click(handleClick);
        $("#600").append($("<div>$600</div>").attr("id", `${clue["id"]}-600`).addClass("col-2 border border-dark align-middle text-center clue")).unbind().click(handleClick);
        $("#800").append($("<div>$800</div>").attr("id", `${clue["id"]}-800`).addClass("col-2 border border-dark align-middle text-center clue")).unbind().click(handleClick);
        $("#1000").append($("<div>$1000</div>").attr("id", `${clue["id"]}-1000`).addClass("col-2 border border-dark align-middle text-center clue")).unbind().click(handleClick);
    }
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
    $(`#${id}`).text(question).css("color", "white").css("font-family", "Roboto");
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


/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    let categoryIDs = await getCategoryIds(); 
    await Promise.all(categoryIDs.map((id) => { return getCategoryData(id) }));
    await fillTable();
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

setupAndStart()

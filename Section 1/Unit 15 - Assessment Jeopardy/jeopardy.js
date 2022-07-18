const apiEndpoint = "http://jservice.io"
const cluesEndpoint = `${apiEndpoint}/api/clues`
const categoriesEndpoint = `${apiEndpoint}/api/category`


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
    const clues = {}
    for (let i = 0, value = 200; i < 5; i++, value += 200) {
        const response = await axios.get(cluesEndpoint, { params: { category } })

        clues["id"] = category;
        clues["category"] = response.data[0].category.title;
        clues[value] = {
            "answer": response.data[i].answer,
            "question": response.data[i].question,
            "showing": null
        };
    }
    return clues;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(gameData) {
    
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

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
    const gameData = await Promise.all(categoryIDs.map((id) => { return getCategoryData(id) }));
    await fillTable(gameData);
    
    
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

setupAndStart()
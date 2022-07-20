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
    getCluesNoAPI();
    
    //let categoryIDs = await getCategoryIds();
    //await Promise.all(categoryIDs.map((id) => { return getCategoryData(id) }));
    
    
    
    
    

    await fillTable();
}

/** On click of start / restart button, set up game. */
$("#start-button").on("click", async () => {
    showLoadingView();
    try{await setupAndStart()}catch{await setupAndStart()}
    hideLoadingView();
})





function getCluesNoAPI() {
    clues.push({
        id: 151235,
        category: '\'60s Rock',
        200: {
            answer: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            question: 'Bob Dylan & Dion were the only 2 other rock singers on the cover of this 1967 Beatles Album',
            showing: null
        },
        400: {
            answer: 'The Doors',
            question: 'In July 1967 this group\'s "Light My Fire" became Elektra Records\' first No. 1 single',
            showing: null
        },
        600: {
            answer: 'Mr. Postman',
            question: 'In 1961 the Marvelettes asked him to "Look and see, is there a letter in your bag for me?"',
            showing: null
        },
        800: {
            answer: 'Guess Who',
            question: 'This group\'s 1969 hit "These Eyes" featured Randy Bachman, later of B-T-O, on lead guitar',
            showing: null
        },
        1000: {
            answer: 'Jimi Hendrix',
            question: 'His guitar-burning act was a highlight of the 1967 Monterey Pop Festival',
            showing: null
        },
    })
    
    clues.push({
        id: 112345,
        category: '"C" IN SCIENCE',
        200: {
            answer: 'a compound',
            question: 'It\'s the name of a chemical substance made up of 2 or more elements',
            showing: null
        },
        400: {
            answer: 'a comet',
            question: 'In 1985 Giacobini-Zinner became the first one of these to be intercepted by a spacecraft',
            showing: null
        },
        600: {
            answer: 'a cyclone',
            question: 'These windstorms spiral clockwise in the Southern Hemisphere & counterclockwise in the Northern',
            showing: null
        },
        800: {
            answer: 'collagen',
            question: 'When boiled, this fibrous protein found in bones & connective tissue dissolves & forms gelatin',
            showing: null
        },
        1000: {
            answer: 'cohesion',
            question: 'It\'s the force that holds the molecules of a substance together',
            showing: null
        },
    })
    clues.push({
        id: 112315,
        category: '"HIGH" SCHOOL',
        200: {
            answer: 'high-tops',
            question: 'Chuck Taylor, from whom Converse named a line of these shoes, was a basketball star of the 1910s',
            showing: null
        },
        400: {
            answer: 'the high five',
            question: 'The L.A. Dodgers & the U. of Louisville basketball team pioneered this gesture in the late \'70s',
            showing: null
        },
        600: {
            answer: 'High seas/C\'s',
            question: 'Coastal waters beyond national jurisdiction, or the tops of some sopranos\' ranges',
            showing: null
        },
        800: {
            answer: 'High Definition',
            question: 'The HD in the new digital format HDTV stands for this',
            showing: null
        },
        1000: {
            answer: 'High Mass',
            question: 'Acolytes, a subdeacon & a choir take part in this Catholic service',
            showing: null
        },
    })
    clues.push({
        id: 1613415,
        category: '"LIKE"',
        200: {
            answer: 'There\'s no place like home',
            question: '5-word phrase repeated by Dorothy Gale when clicking her heels together in "The Wizard of Oz"',
            showing: null
        },
        400: {
            answer: 'Tastes Like chicken',
            question: '3-word cliche used of exotic food; Ramona said it about rat on the first "Survivor"',
            showing: null
        },
        600: {
            answer: 'likelihood',
            question: '"In all" this, the state or fact of being probable',
            showing: null
        },
        800: {
            answer: 'Likeness (or look-a-like)',
            question: 'A doppelganger',
            showing: null
        },
        1000: {
            answer: 'Sheep-like',
            question: 'Ovine',
            showing: null
        },
    })
    clues.push({
        id: 11234155,
        category: '"O"PERA',
        200: {
            answer: 'Oedipus',
            question: 'Stravinsky enlisted the help of Cocteau for a Libretto based on Sophocles\' play about this Theban king',
            showing: null
        },
        400: {
            answer: 'Of Mice And Men',
            question: 'George finds out Lennie has a dead mouse in his pocket in this Carlisle Floyd opera based on a 1937 novel',
            showing: null
        },
        600: {
            answer: 'Otello',
            question: 'Verdi\'s work on this General\'s life opens in Cyprus; Shakespeare\'s tale begins in Venice',
            showing: null
        },
        800: {
            answer: 'Oberon',
            question: 'Titania & Puck play a part in the Carl Maria Von Weber opera named for this king of the fairies',
            showing: null
        },
        1000: {
            answer: 'Orlando',
            question: 'Disney World crowds might go nuts for this title knight, aka Roland, made famous by both Handel & Vivaldi',
            showing: null
        },
    })
    clues.push({
        id: 151111,
        category: '"TOUCH" ME',
        200: {
            answer: 'Touchdown',
            question: 'It\'s worth 6 points',
            showing: null
        },
        400: {
            answer: 'Touch-tone',
            question: 'Telephone type',
            showing: null
        },
        600: {
            answer: 'Touch and go',
            question: 'A practice landing & immediate takeoff for a pilot',
            showing: null
        },
        800: {
            answer: 'Touchstone',
            question: 'An object to test gold, or a standard by which something is judged',
            showing: null
        },
        1000: {
            answer: 'Touch of Evil',
            question: 'An Orson Welles thriller',
            showing: null
        },
})

}
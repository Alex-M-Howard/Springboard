
const baseURL = 'https://deckofcardsapi.com/api/deck'


let params = {
    deck_count: 1
}

async function getNewDeck() {
    let res = await axios.get(`${baseURL}/new/shuffle`, { params })
    return res.data.deck_id
}

async function drawCard(deckId) {
    let res = await axios.get(`${baseURL}/${deckId}/draw/?count=1`);
    return res.data
}

function displayCard(card) {
    $("#results").append($(`<img src='${card.image}'></img>`));
}
let deckId;
document.addEventListener("DOMContentLoaded", async () => {
    deckId = await getNewDeck();
    
    $("button").on("click", async () => {
      let response = await drawCard(deckId);
    
        if (response.success) { displayCard(response.cards[0]) }
        else { $("button").remove() }
    });
})

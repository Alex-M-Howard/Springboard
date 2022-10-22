
const baseURL = 'https://deckofcardsapi.com/api/deck'


// 1 - Able to do in one request, but let's practice nested axios
let params = {
    deck_count: 1
}

axios.get(`${baseURL}/new/shuffle`, { params })
    .then((res) => {
        axios.get(`${baseURL}/${res.data.deck_id}/draw/?count=1`)
            .then(res => {
                console.log('/////////// EXERCISE 1 ////////////');
                console.log(`Card: ${res.data.cards[0].value} ${res.data.cards[0].suit}`);
                console.log("//////////////////////////////////");

            })
    })
console.log('\n\n');

    // 2

axios.get(`${baseURL}/new/draw/?count=1`)
    .then((res) => {
      console.log("/////////// EXERCISE 2 ////////////");
      console.log(`Excercise 2 - Card 1: ${res.data.cards[0].value} ${res.data.cards[0].suit}`) 
    
        return axios.get(`${baseURL}/${res.data.deck_id}/draw/?count=1`)
            .then((res) => {
                console.log(
                  `Excercise 2 - Card 2: ${res.data.cards[0].value} ${res.data.cards[0].suit}`
                );
                console.log("//////////////////////////////////");
            })
    })
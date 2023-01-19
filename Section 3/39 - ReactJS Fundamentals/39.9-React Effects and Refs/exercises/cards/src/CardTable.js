import { React, useState, useEffect } from "react";
import CardButton from "./CardButton.js";
import Card from "./Card.js";
import { v4 as uuid4 } from "uuid";
import "./CardTable.css"
import axios from "axios";

const API_NEW = "https://deckofcardsapi.com/api/deck/new/";
const API_DRAW ="https://deckofcardsapi.com/api/deck";

const CardTable = () => {

    const [cards, setCards] = useState([])

    useEffect(function fetchCardDeckWhenMounted() {
        async function fetchCardDeck() {
            const deck = await axios.get(API_NEW);
            setCards(deck.data);
        }
        fetchCardDeck();
    }, [])

    function drawCard() {
        setCards();
    }

    useEffect(function drawCardWhenMounted() {
        
        async function drawCardAPI() {
            const deck = await axios.get(`${API_DRAW}/${cards.deck_id}/draw/?count=1`);
            setCards(deck.data); // This is changing cards, which is why this is an infinite loop...
        }
        drawCardAPI();
    }, [cards])



    return (
      <div className="CardTable">
        <CardButton drawCard={drawCard} />
            <div className="CardTable-Cards">
                <Card />
            </div>
      </div>
    );
}

export default CardTable;

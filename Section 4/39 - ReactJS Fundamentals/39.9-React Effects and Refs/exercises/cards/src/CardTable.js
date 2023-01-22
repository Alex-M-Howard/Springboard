import { React, useState, useEffect, useRef } from "react";
import CardButton from "./CardButton.js";
import Card from "./Card.js";
import { v4 as uuid4 } from "uuid";
import "./CardTable.css"
import axios from "axios";

const API_NEW = "https://deckofcardsapi.com/api/deck/new/shuffle/";
const API_DRAW ="https://deckofcardsapi.com/api/deck";

const CardTable = () => {
    const [cards, setCards] = useState([])
    const [drawn, setDrawn] = useState([])
    const [autoDraw, setAutoDraw] = useState(false);
    const timerRef = useRef(null);

    useEffect(function fetchCardDeckWhenMounted() {
        async function fetchCardDeck() {
            const deck = await axios.get(API_NEW);
            setCards(deck.data);
        }
        fetchCardDeck();
    }, [])

    useEffect(() => {
        async function drawCard() {
            if (cards.remaining === 0) {
                setAutoDraw(false);
                alert("No cards remaining!");
                return;
            }
        const deck = await axios.get(
          `${API_DRAW}/${cards.deck_id}/draw/?count=1`
        );
        setDrawn([...drawn, deck.data.cards[0]]);
        setCards(deck.data);
      }

      if (autoDraw && !timerRef.current) {
        timerRef.current = setInterval(async () => {
          await drawCard();
        }, 1000);
      }

      return () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
      };
    }, [autoDraw, setAutoDraw, drawn, cards]);


    const toggleAutoDraw = () => {
        setAutoDraw(autoDraw => !autoDraw);
    }
    

    const drawnCards = drawn.map(card => <Card key={uuid4()} image={card.image} alt={card.code} />)
    const button = () => {
        if (cards.remaining === 0 && drawn.length > 0) return 

        return <CardButton drawCard={toggleAutoDraw} autoDraw={autoDraw} />
    }

    return (
        <div className="CardTable">
            {button()}
            {drawnCards}
      </div>
    );
}

export default CardTable;

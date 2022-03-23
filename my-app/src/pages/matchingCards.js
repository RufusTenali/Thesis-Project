import React, { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../Components/Navbar/SingleCard";
import '../App.css'
  
const cardImages = [
  {"src": "/img/red-1.png", matched: false},
  {"src": "/img/blue-1.png", matched: false},
  {"src": "/img/green-1.png", matched: false},
  {"src": "/img/purple-1.png", matched: false},
  {"src": "/img/yellow-1.png", matched: false},
  {"src": "/img/pink-1.png", matched: false}
]

function Matching() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) =>({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
  
  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare 2 selected states
  useEffect(() => {
    if (choiceOne&& choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        //console.log('those cards match')
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched:true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        //console.log('those cards dont match')
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  //reset choices & increase turn
  const resetTurn= () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  //start game automagically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="app">
    <div className="matching">
      <h1> Matching Cards</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
    <p>Turns: {turns}</p>
    </div>
  );
};
  
export default Matching;